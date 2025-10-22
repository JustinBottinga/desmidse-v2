import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-6 space-y-4 text-center">
      <h1 className="text-2xl font-semibold">404 - Not Found</h1>
      <p className="text-muted-foreground">
        The page you’re looking for doesn't exist.
      </p>
      <Link className="text-primary underline" to="/">
        Go home
      </Link>
    </div>
  );
}
