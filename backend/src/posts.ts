import { Hono } from "hono";
import { createPost, getPosts } from "../db/posts";
import { Env } from "./types";

const app = new Hono<Env>();

app.get("/", async (c) => {
  const posts = await getPosts();
  return c.json(posts, 200);
});

app.post("/", async (c) => {
  const { title, content } = await c.req.json();
  await createPost(title, content);
  return c.json({ message: "Post created successfully" }, 201);
});

app.delete("/:id", async (c) => {
  return c.json({ message: "User deleted successfully" });
});

export default app;
