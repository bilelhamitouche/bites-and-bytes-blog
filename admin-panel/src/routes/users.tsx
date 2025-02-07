import { createFileRoute } from "@tanstack/react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import { User } from "lucide-react";

export const Route = createFileRoute("/users")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Breadcrumbs text="Users" link="/users" icon={<User size={18} />} />
    </div>
  );
}
