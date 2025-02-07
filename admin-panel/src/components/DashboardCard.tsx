import { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
  count: number;
}

function DashboardCard({ text, icon, count }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-xl p-8 shadow-md shadow-base-300">
      <div className="flex justify-between items-center">
        <span className="text-base font-semibold">Total {text}</span>
        {icon}
      </div>
      <span className="text-3xl font-extrabold">{count}</span>
    </div>
  );
}

export default DashboardCard;
