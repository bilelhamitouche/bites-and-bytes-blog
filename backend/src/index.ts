import { Hono } from "hono";
import { cors } from "hono/cors";
import auth, { authMiddleware } from "./auth";

// App initialization
const app = new Hono().basePath("/api");

const routes = ["/posts/*", "/comments/*", "/users/*"];

// Middleware
app.use(cors({ origin: ["", ""] }));

// Routers
app.route("/auth", auth);
routes.forEach((route) => {
  app.use(route, authMiddleware);
});
app.get("/posts", (c) => {
  return c.html("Hello world from protected route");
});

app.onError(async (err, c) => {
  return c.json({ message: "Error occured", err: err });
});

app.notFound((c) => {
  return c.json({ error: "Route not found 404" });
});

export default {
  port: process.env.PORT,
  fetch: app.fetch,
};
