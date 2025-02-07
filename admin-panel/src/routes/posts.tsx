import { Link, createFileRoute } from "@tanstack/react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import { Rss } from "lucide-react";
import DataTable from "../components/DataTable";

export const Route = createFileRoute("/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <Breadcrumbs text="Posts" link="/posts" icon={<Rss size={18} />} />
      <div className="flex flex-col gap-4 w-full">
        <div className="justify-between flex w-full">
          <div></div>
          <Link to="/users" className="btn btn-primary rounded-lg">
            Add Post
          </Link>
        </div>
        <DataTable />
      </div>
    </div>
  );
}
