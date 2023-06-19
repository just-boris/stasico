import { Header, TextContent } from "@cloudscape-design/components";
import { Helmet } from "react-helmet";
import MainLayout from "../layouts/main";

export default function () {
  return (
    <MainLayout>
      <Helmet>
        <title>Stasico - home</title>
        <meta
          name="description"
          content="Welcome to our webiste. If you can read this, then meta tags work correctly"
        />
      </Helmet>
      <Header variant="h1">Welcome</Header>
      <TextContent>
        <p>Feel free to explore our website</p>
      </TextContent>
    </MainLayout>
  );
}
