import { Link } from "@tanstack/react-router";
import { LayoutDashboard } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  text: string;
  link: string;
  icon: ReactNode;
}

function Breadcrumbs({ text, link, icon }: Props) {
  return (
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
  );
}

export default Breadcrumbs;
