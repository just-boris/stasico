import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import filterConsole from "filter-console";
import { App } from "./app";

filterConsole([/useLayoutEffect does nothing on the server/]);

export { routes } from "./routes";

export async function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
