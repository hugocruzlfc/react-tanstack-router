import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="p-2 space-y-2">
      <p>
        This is a simple example of how to use the TanStack's React Router
        library with Vite. This is the about page. I recommend 100 x 100 this
        library. It's amazing!
      </p>
      <p>
        Simply understand the folder and file structure and the library will do
        the magic. Don't worry about performance, it's incredible. Easy to scale
        and maintain.
      </p>
      <h4>Please visit the docs page! 👆🏻</h4>
    </div>
  );
}
