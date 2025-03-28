import { LearningPathType } from "@skillsync/utils/learningPlans";
import Link from "next/link";

export const LearningPathCard = ({
  plan,
  className,
  href,
}: {
  plan: LearningPathType;
  className?: string;
  href?: string;
}) => {
  if (href)
    return (
      <Link
        data-testid="learning-path-card-link"
        href={href}
        className={`bg-white rounded-md  p-4 hover:drop-shadow-md text-primary cursor-pointer hover:text-accent ${className}`}>
        <h3 className="text-lg font-bold">{plan.title}</h3>
        <p className="text-text">{plan.focus} </p>
      </Link>
    );

  return (
    <div
      data-testid="learning-path-card-div"
      className={`bg-white rounded-md  p-4 hover:drop-shadow-md text-primary cursor-pointer ${className}`}>
      <h3 className="text-lg font-bold">{plan.title}</h3>
      <p className="text-text">{plan.focus} </p>
    </div>
  );
};
