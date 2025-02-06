import { Hono, Next } from "hono";
import { decode, sign, verify } from "hono/jwt";
import { JWTPayload } from "hono/utils/jwt/types";
import { HTTPException } from "hono/http-exception";
import * as bcrypt from "bcrypt";
import { getCookie, setCookie } from "hono/cookie";
import { bearerAuth } from "hono/bearer-auth";
import { Factory } from "hono/factory";
import { createUser, getUserByEmail } from "../db/users";
import { Env } from "./types";
import { Context } from "hono/jsx";

const app = new Hono<Env>();

const JWT_SECRET = process.env.JWT_SECRET as string;

const factory = new Factory();

// export const authMiddleware = bearerAuth({
//   // verifyToken: async (token, c) => {
//   try {
//     await verify(token, JWT_SECRET);
//     return true;
//   } catch {
//     return false;
//   }
// },
//});

export const authMiddleware = async (c: Context, next: Next) => {
  const token = getCookie(c, "token");
  if (!token) {
    return c.json({ message: "Unauthorized to do this" }, 401);
  }
  try {
    await verify(token, JWT_SECRET);
    await next();
  } catch {
    return c.json({ message: "Unauthorized" }, 401);
  }
};

export const authorizeAdminMiddleware = factory.createMiddleware(
  async (c, next) => {
    const token = decode(getCookie(c, "token") as string);
    if (token.payload.role === "ADMIN") {
      await next();
    } else {
      c.status(403);
      return c.json({ message: "Unauthorized to complete this action" });
    }
  },
);

app.post("/login", async (c) => {
  const { email, password } = await c.req.json();
  const user = await getUserByEmail(email);
  if (!user) {
    throw new HTTPException(401, { message: "Invalid email" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new HTTPException(401, { message: "Invalid password" });
  }
  const payload: JWTPayload = {
    id: user.id,
    username: user.username,
    sub: user.email,
    role: user.role,
    exp: Math.floor(Date.now() / 100) * 60 * 5,
  };
  const token = await sign(payload, process.env.JWT_SECRET as string);
  setCookie(c, "token", token, {
    httpOnly: true,
  });
  return c.json({ token });
});

app.post("/register", async (c) => {
  const { username, email, password } = await c.req.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  await createUser(username, email, hashedPassword);
  c.status(200);
  return c.json({ message: "Account created successfully" });
});

export default app;
