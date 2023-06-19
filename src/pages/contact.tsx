import { Header, TextContent } from "@cloudscape-design/components";
import { Helmet } from "react-helmet";
import MainLayout from "../layouts/main";

export default function () {
  return (
    <MainLayout>
      <Helmet>
        <title>Contacts</title>
        <meta name="description" content="Contacts page description" />
      </Helmet>
      <Header variant="h1">Contacts page</Header>
      <TextContent>
        <p>Contact us</p>
      </TextContent>
    </MainLayout>
  );
}
