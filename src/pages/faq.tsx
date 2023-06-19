import { Header, TextContent } from "@cloudscape-design/components";
import MainLayout from "../layouts/main";

export default function () {
  return (
    <MainLayout>
      <Header variant="h1">Frequently asked questions</Header>
      <TextContent>
        <p>No questions so far</p>
      </TextContent>
    </MainLayout>
  );
}
