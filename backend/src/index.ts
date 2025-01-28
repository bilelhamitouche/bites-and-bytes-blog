import { Hono } from "hono";
import { cors } from "hono/cors";
import auth from "./auth";

// App initialization
const app = new Hono().basePath("/api");

// Middleware
app.use(cors({ origin: ["", ""] }));

// Routers
app.route("/auth", auth);

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
