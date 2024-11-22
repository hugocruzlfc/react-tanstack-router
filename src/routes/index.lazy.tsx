import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <h4>Please visit the about page! 👆🏻</h4>
    </div>
  );
}
