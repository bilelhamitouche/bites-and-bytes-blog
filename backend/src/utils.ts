import { Context } from "hono";
import { getCookie } from "hono/cookie";
import { decode } from "hono/jwt";

export async function getUserInfo(c: Context) {
  const token = getCookie(c, "token");
  const tokenPayload = decode(token).payload;
  return tokenPayload;
}
