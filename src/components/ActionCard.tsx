import { ActionType } from "@skillsync/app/types/plan";
import { useState } from "react";

export const ActionCard = ({
  action,
  className,
}: {
  action: ActionType;
  className?: string;
}) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div
      className={`bg-white rounded-md p-4 hover:drop-shadow-md text-primary cursor-pointer ${className}`}
      onClick={() => setCollapsed(!collapsed)}>
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-bold">{action.action}</h3>
          <p className="text-text">{action.output} </p>
        </div>
        <div>
          <select
            defaultValue={action.status}
            className="select select-bordered select-sm w-full max-w-xs">
            <option value="todo">Not Started</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="skipped">Skipped</option>
          </select>
        </div>
      </div>
      {!collapsed && (
        <div>
          <p className="text-sm text-text mt-2">
            {action.notes || "Add notes here..."}
          </p>
        </div>
      )}
    </div>
  );
};
