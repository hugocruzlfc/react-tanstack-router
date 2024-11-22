import { Docs } from "@/components";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/docs")({
  component: DocsPage,
});

function DocsPage() {
  return <Docs />;
}
