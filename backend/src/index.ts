import { Hono } from "hono";
import { cors } from "hono/cors";
import auth, { authMiddleware } from "./auth";
import posts from "./posts";
import users from "./users";
import comments from "./comments";
import stats from "./stats";
import { Env } from "./types";

// App initialization
const app = new Hono<Env>().basePath("/api");

const routes = ["/posts/*", "/comments/*", "/users/*"];

// Middleware
app.use(cors({ origin: ["", ""] }));
routes.forEach((route) => {
  app.use(route, authMiddleware);
});

// Routers
app.route("/auth", auth);
app.route("/posts", posts);
app.route("/users", users);
app.route("/comments", comments);
app.route("/stats", stats);

// Error middleware
app.onError(async (err, c) => {
  return c.json({ message: "Error occured", err: err });
});

// Not found middleware
app.notFound((c) => {
  return c.json({ error: "Route not found 404" });
});

export default {
  port: process.env.PORT,
  fetch: app.fetch,
};
