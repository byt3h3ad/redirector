import { Hono } from "hono";
import { metadata, uris } from "./data";

const app = new Hono();

app.get("/", (c) => {
  return c.json(metadata);
});

uris.forEach(([key, value]) => {
  app.get(`/${key}`, (c) => {
    return c.redirect(value);
  });
});

export default app;
