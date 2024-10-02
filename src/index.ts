import { Hono } from "hono";
import { prettyJSON } from "hono/pretty-json";
import { metadata, uris } from "./data";

const app = new Hono();

app.use(prettyJSON());

app.get("/", (c) => {
  return c.json(metadata);
});

uris.forEach(([key, value]) => {
  app.get(`/${key}`, (c) => {
    return c.redirect(value);
  });
});

export default app;
