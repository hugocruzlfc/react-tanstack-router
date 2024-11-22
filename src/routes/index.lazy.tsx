import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div className="p-2 space-y-2">
      <h3>Welcome Home!</h3>
      <p>
        This is a simple example of how to use the TanStack's React Router
        library with Vite.
      </p>
      <h4>Please visit the about page! 👆🏻</h4>
    </div>
  );
}
