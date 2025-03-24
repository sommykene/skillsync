import { ActionType } from "@skillsync/utils/breakdowns";

export const ActionCard = ({
  action,
  className,
}: {
  action: ActionType;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white rounded-md  p-4 hover:drop-shadow-md text-primary cursor-pointer ${className}`}>
      <h3 className="text-lg font-bold">{action.action}</h3>
      <p className="text-text">{action.output} </p>
    </div>
  );
};
