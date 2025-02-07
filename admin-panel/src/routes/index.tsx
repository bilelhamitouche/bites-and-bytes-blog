import { createFileRoute } from "@tanstack/react-router";
import DashboardCard from "../components/DashboardCard";
import { MessageCircle, Rss, User } from "lucide-react";
export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div className="grid grid-cols-3 grid-rows-1 items-center w-full gap-4">
      <DashboardCard
        text="Users"
        icon={<User className="text-primary" />}
        count={3}
      />
      <DashboardCard
        text="Posts"
        icon={<Rss className="text-primary" />}
        count={3}
      />
      <DashboardCard
        text="Comments"
        icon={<MessageCircle className="text-primary" />}
        count={3}
      />
    </div>
  );
}
