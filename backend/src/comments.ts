import { Hono } from "hono";
import { Env } from "./types";
import {
  createComment,
  deleteComment,
  getComments,
  updateComment,
} from "../db/comments";
import { getUserInfo } from "./utils";

const app = new Hono<Env>();

app.get("/", async (c) => {
  const comments = await getComments();
  return c.json(comments);
});

app.post("/", async (c) => {
  const { content, postId } = await c.req.json();
  const { id } = await getUserInfo(c);
  await createComment(content, id as number, postId);
  return c.json({ message: "Comment created successfully" });
});

app.put("/:id", async (c) => {
  const id = c.req.param("id");
  const { content } = await c.req.json();
  const updatedComment = await updateComment(parseInt(id), content);
  console.log(updatedComment);
  return c.json({ message: "Comment updated successfully" });
});

app.delete("/:id", async (c) => {
  const id = c.req.param("id");
  await deleteComment(parseInt(id));
  return c.json({ message: "Comment deleted successfully" });
});

export default app;
