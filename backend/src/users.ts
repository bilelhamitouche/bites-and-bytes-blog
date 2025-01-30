import { Hono } from "hono";
import { createUser, deleteUser, getUsers } from "../db/users";
import { Env } from "./types";

const app = new Hono<Env>();

app.get("/", async (c) => {
  const users = await getUsers();
  return c.json(users, 200);
});

app.post("/", async (c) => {
  const { username, email, password } = await c.req.json();
  await createUser(username, email, password);
  return c.json({ message: "User created successfully" }, 201);
});

app.delete("/:id", async (c) => {
  const { id } = await c.req.json();
  await deleteUser(id);
  return c.json({ message: "User deleted successfully" }, 202);
});

export default app;
