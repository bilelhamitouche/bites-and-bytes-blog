import { createFileRoute, Link } from "@tanstack/react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import { MessageCircle } from "lucide-react";
import DataTable from "../components/DataTable";

export const Route = createFileRoute("/comments")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Breadcrumbs
        text="Comments"
        link="/comments"
        icon={<MessageCircle size={18} />}
      />
      <div className="flex flex-col gap-4 w-full">
        <div className="justify-between flex w-full">
          <div></div>
          <Link to="/users" className="btn btn-primary rounded-lg">
            Add Comment
          </Link>
        </div>
        <DataTable />
      </div>
    </div>
  );
}
