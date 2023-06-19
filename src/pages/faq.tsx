import { Header, TextContent } from "@cloudscape-design/components";
import { Helmet } from "react-helmet";
import MainLayout from "../layouts/main";

export default function () {
  return (
    <MainLayout>
      <Helmet>
        <title>Faq</title>
        <meta name="description" content="FAQ page" />
      </Helmet>
      <Header variant="h1">Frequently asked questions</Header>
      <TextContent>
        <p>No questions so far</p>
      </TextContent>
    </MainLayout>
  );
}
