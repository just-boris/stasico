import { Header, TextContent } from "@cloudscape-design/components";
import MainLayout from "../layouts/main";

export default function () {
  return (
    <MainLayout>
      <Header variant="h1">Contacts page</Header>
      <TextContent>
        <p>Contact us</p>
      </TextContent>
    </MainLayout>
  );
}
