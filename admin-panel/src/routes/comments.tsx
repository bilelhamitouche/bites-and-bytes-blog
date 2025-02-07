import { createFileRoute } from "@tanstack/react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import { MessageCircle } from "lucide-react";
import DataTable from "../components/DataTable";

export const Route = createFileRoute("/comments")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <Breadcrumbs
        text="Comments"
        link="/comments"
        icon={<MessageCircle size={18} />}
      />
      <DataTable />
    </div>
  );
}
