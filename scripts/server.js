import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { createServer as createViteServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: "custom",
});

app.use(vite.middlewares);

app.use("*", async (req, res, next) => {
  const url = req.originalUrl;

  try {
    let template = fs.readFileSync(path.resolve(__dirname, "..", "index.html"), "utf-8");

    template = await vite.transformIndexHtml(url, template);
    const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
    const renderResult = render(url);
    const html = template
      .replace("<!--ssr-outlet-->", renderResult.html)
      .replace("<!-- ssr-meta -->", renderResult.meta);
    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (e) {
    vite.ssrFixStacktrace(e);
    next(e);
  }
});

app.listen(8000, () => {
  console.log("🌍 http://localhost:8000");
});
