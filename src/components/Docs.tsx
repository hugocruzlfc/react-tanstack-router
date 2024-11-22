import { Button } from "./ui/button";

export function Docs() {
  return (
    <div className="space-y-2 flex flex-col items-center py-10">
      <div className="flex items-center">
        <h4>Visit the TanStack libraries:</h4>
        <Button
          asChild
          variant="link"
        >
          <a
            href="https://tanstack.com/router/latest/docs/framework/react/overview"
            target="_blank"
            rel="noopener noreferrer"
          >
            TanStack Router Docs 📚
          </a>
        </Button>
      </div>
      <p>and</p>
      <div className="flex items-center">
        <h4>Visit the TanStack libraries:</h4>
        <Button
          asChild
          variant="link"
        >
          <a
            href="https://tanstack.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TanStack Website 🚀
          </a>
        </Button>
      </div>
    </div>
  );
}
