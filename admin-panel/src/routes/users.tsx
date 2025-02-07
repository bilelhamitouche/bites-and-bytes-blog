import { createFileRoute } from "@tanstack/react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import { User } from "lucide-react";
import DataTable from "../components/DataTable";

export const Route = createFileRoute("/users")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Breadcrumbs text="Users" link="/users" icon={<User size={18} />} />
      <DataTable />
    </div>
  );
}
