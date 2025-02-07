import { Link } from "@tanstack/react-router";
import { LayoutDashboard, Menu } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  text: string;
  link: string;
  icon: ReactNode;
}

function Breadcrumbs({ text, link, icon }: Props) {
  return (
    <div className="flex w-full justify-between items-center">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/">
              <LayoutDashboard size={18} />
            </Link>
          </li>
          <li>
            <Link to={link} className="flex gap-2 items-center">
              {icon}
              {text}
            </Link>
          </li>
        </ul>
      </div>
      <label
        htmlFor="my-drawer-2"
        className="btn btn-primary btn-sm drawer-button md:hidden"
      >
        <Menu size={18} />
      </label>
    </div>
  );
}

export default Breadcrumbs;
