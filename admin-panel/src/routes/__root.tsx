import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NavLink from "../components/NavLink";
import { LayoutDashboard, MessageCircle, Rss, User } from "lucide-react";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="drawer md:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex">
          <main className="p-4 w-full flex items-center justify-between md:items-start">
            <Outlet />
          </main>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <aside className="menu bg-base-200 text-base min-h-full w-64 p-4">
            <h1 className="text-2xl font-bold pl-4 mb-8">Admin panel</h1>
            <ul className="flex flex-col gap-2">
              <NavLink
                to="/"
                text="Dashboard"
                icon={<LayoutDashboard size={18} />}
              />
              <NavLink to="/users" text="Users" icon={<User size={18} />} />
              <NavLink to="/posts" text="Posts" icon={<Rss size={18} />} />
              <NavLink
                to="/comments"
                text="Comments"
                icon={<MessageCircle size={18} />}
              />
            </ul>
          </aside>
        </div>
      </div>
      <TanStackRouterDevtools />
    </>
  ),
});
