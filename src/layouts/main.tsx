import { AppLayout, SideNavigation } from "@cloudscape-design/components";
import { ReactNode } from "react";
import { routes } from "../routes";
import { useLocation, useNavigate } from "react-router-dom";

export default function MainLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <AppLayout
      navigation={
        <SideNavigation
          header={{ text: "Stasico", href: "/" }}
          activeHref={location.pathname}
          items={routes.map((route) => ({ type: "link", text: route.name, href: route.path }))}
          onFollow={(event) => {
            event.preventDefault();
            navigate(event.detail.href);
          }}
        />
      }
      content={children}
    />
  );
}
