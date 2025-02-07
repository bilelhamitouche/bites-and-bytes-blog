import { createFileRoute } from "@tanstack/react-router";
import Breadcrumbs from "../components/Breadcrumbs";
import { Rss } from "lucide-react";

export const Route = createFileRoute("/posts")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Breadcrumbs text="Posts" link="/posts" icon={<Rss size={18} />} />
    </div>
  );
}
