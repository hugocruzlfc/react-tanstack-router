import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <div className="p-2 flex gap-2">
      <Button
        asChild
        variant="link"
      >
        <Link
          to="/"
          className="[&.active]:font-bold"
        >
          Home
        </Link>
      </Button>
      <Button
        asChild
        variant="link"
      >
        <Link
          to="/about"
          className="[&.active]:font-bold"
        >
          About
        </Link>
      </Button>
      <Button
        asChild
        variant="link"
      >
        <Link
          to="/docs"
          className="[&.active]:font-bold"
        >
          Docs
        </Link>
      </Button>
    </div>
  );
}
