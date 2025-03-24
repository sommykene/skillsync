import { PlanBreakdown } from "@skillsync/utils/breakdowns";
import dayjs from "dayjs";
import Link from "next/link";

export const PlanCard = ({
  plan,
  className,
}: {
  plan: PlanBreakdown;
  className?: string;
}) => {
  return (
    <Link
      href={`/plan/${plan.id}`}
      className={`bg-white rounded-md  p-4 hover:drop-shadow-md text-primary cursor-pointer hover:text-accent ${className}`}>
      <h3 className="text-lg font-bold">{plan.title}</h3>
      <p className="font-semibold text-primary/80">
        {dayjs(plan.startDate).format("DD MMM YYYY")}
        {plan.dateCompleted &&
          ` - ${dayjs(plan.dateCompleted).format("DD MMM YYYY")}`}
      </p>
      <p className="text-text">{plan.summary} </p>
    </Link>
  );
};
