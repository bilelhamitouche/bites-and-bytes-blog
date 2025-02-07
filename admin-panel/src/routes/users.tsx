import { createFileRoute, Link } from "@tanstack/react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import { User } from "lucide-react";
import DataTable from "../components/DataTable";

export const Route = createFileRoute("/users")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Breadcrumbs text="Users" link="/users" icon={<User size={18} />} />
      <div className="flex flex-col gap-4 w-full">
        <div className="justify-between flex w-full">
          <div></div>
          <Link to="/users" className="btn btn-primary rounded-lg">
            Add User
          </Link>
        </div>
        <DataTable />
      </div>
    </div>
  );
}
