import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import "@cloudscape-design/global-styles/index.css";

export function App() {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
}
