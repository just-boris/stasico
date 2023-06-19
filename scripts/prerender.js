import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = (...args) => path.join(__dirname, "../dist", ...args);

const template = fs.readFileSync(distPath("client/index.html"), "utf-8");
const { render, routes } = await import(distPath("server/entry-server.js"));

for (const route of routes) {
  console.log("rendering:", route.path);
  const renderResult = render(route.path);

  const targetPath = distPath("client", route.path, "index.html");
  const html = template.replace("<!--ssr-outlet-->", renderResult.html).replace("<!-- ssr-meta -->", renderResult.meta);

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.writeFileSync(targetPath, html);
}
