import { createFileRoute } from "@tanstack/react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import { MessageCircle } from "lucide-react";

export const Route = createFileRoute("/comments")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-2 items-start">
      <Breadcrumbs
        text="Comments"
        link="/comments"
        icon={<MessageCircle size={18} />}
      />
    </div>
  );
}
