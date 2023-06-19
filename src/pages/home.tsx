import { Header, TextContent } from "@cloudscape-design/components";
import MainLayout from "../layouts/main";

export default function () {
  return (
    <MainLayout>
      <Header variant="h1">Welcome</Header>
      <TextContent>
        <p>Feel free to explore our website</p>
      </TextContent>
    </MainLayout>
  );
}
