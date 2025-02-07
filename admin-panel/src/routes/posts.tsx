import { createFileRoute } from "@tanstack/react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import { Rss } from "lucide-react";
import DataTable from "../components/DataTable";

export const Route = createFileRoute("/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Breadcrumbs text="Posts" link="/posts" icon={<Rss size={18} />} />
      <DataTable />
    </div>
  );
}
