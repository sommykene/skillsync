import { WeeklyBreakdownType } from "@skillsync/utils/weeklyBreakdown";
import Link from "next/link";

export const WeekCard = ({ week, goal }: WeeklyBreakdownType) => {
  return (
    <Link
      href={`#${week}`}
      className={`bg-white rounded-md  p-4 hover:drop-shadow-md text-primary hover:text-accent cursor-pointer`}>
      <h3 className="text-lg font-bold">{week}</h3>
      <p className="text-text">{goal}</p>
    </Link>
  );
};
