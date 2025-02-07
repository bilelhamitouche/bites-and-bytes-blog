import { Link } from "@tanstack/react-router";
import { ReactNode } from "react";

interface Props {
  to: string;
  text: string;
  icon: ReactNode;
}

function NavLink({ to, text, icon }: Props) {
  return (
    <Link
      to={to}
      className="[&.active]:bg-primary [&.active]:text-white p-2 rounded-lg hover:bg-base-100 flex gap-2 transition-colors duration-100"
    >
      {icon} {text}
    </Link>
  );
}

export default NavLink;
