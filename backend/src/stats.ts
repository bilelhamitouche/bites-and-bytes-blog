import { Hono } from "hono";
import { getStats } from "../db/stats";
import { authorizeAdminMiddleware } from "./auth";

const app = new Hono();

app.get("/", authorizeAdminMiddleware, async (c) => {
  const { users, posts, comments } = await getStats();
  return c.json({ users, posts, comments });
});

export default app;
