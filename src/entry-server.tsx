import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import filterConsole from "filter-console";
import { App } from "./app";

filterConsole([/useLayoutEffect does nothing on the server/]);

export { routes } from "./routes";

export function render(url: string) {
  const html = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
  const helmetStatic = Helmet.renderStatic();
  return { html, meta: helmetStatic.meta.toString() + helmetStatic.title.toString() };
}
