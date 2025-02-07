import { createFileRoute } from "@tanstack/react-router";
import DashboardCard from "../components/DashboardCard";
import { Menu, MessageCircle, Rss, User } from "lucide-react";
export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex w-full justify-between">
        <div></div>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary btn-sm drawer-button md:hidden"
        >
          <Menu size={18} />
        </label>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center w-full gap-4">
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
    </div>
  );
}
