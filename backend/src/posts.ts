import { Hono } from "hono";
import { createPost, deletePost, getPosts, updatePost } from "../db/posts";
import { Env } from "./types";
import { authorizeAdminMiddleware } from "./auth";

const app = new Hono<Env>();

app.get("/", async (c) => {
  const posts = await getPosts();
  return c.json(posts, 200);
});

app.post("/", authorizeAdminMiddleware, async (c) => {
  const { title, content } = await c.req.json();
  await createPost(title, content);
  return c.json({ message: "Post created successfully" }, 201);
});

app.put("/:id", authorizeAdminMiddleware, async (c) => {
  const id = c.req.param("id");
  const { title, content, published } = await c.req.json();
  const updatedPost = await updatePost(parseInt(id), title, content, published);
  console.log(updatedPost);
  return c.json({ message: "Post updated successfully" });
});

app.delete("/:id", authorizeAdminMiddleware, async (c) => {
  const id = c.req.param("id");
  await deletePost(parseInt(id));
  return c.json({ message: "User deleted successfully" });
});

export default app;
