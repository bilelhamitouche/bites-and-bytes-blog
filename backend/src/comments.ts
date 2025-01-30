import { Hono } from "hono";
import { Env } from "./types";

const app = new Hono<Env>();

export default app;
