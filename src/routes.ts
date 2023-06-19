import React from "react";

const pages = import.meta.glob<{ default: React.FC }>("./pages/*.tsx", { eager: true });

export const routes = Object.keys(pages)
  .map((path) => {
    const name = path.match(/\.\/pages\/(.*)\.tsx$/)[1];
    return {
      name,
      path: name === "home" ? "/" : `/${name.toLowerCase()}`,
      Component: pages[path].default,
    };
  })
  .reverse();
