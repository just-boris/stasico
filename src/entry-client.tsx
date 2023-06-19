import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import { hydrateRoot } from "react-dom/client";

hydrateRoot(
  document.getElementById("app"),
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <App />
  </BrowserRouter>
);
