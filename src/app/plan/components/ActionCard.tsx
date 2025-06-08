import { ActionType } from "@skillsync/app/types/plan";
import { useSupabaseClient } from "@skillsync/hooks/useSupabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { updateActionStatus } from "../queries/updateActionStatus";

export const ActionCard = ({
  planId,
  action,
  className,
}: {
  planId: string;
  action: ActionType;
  className?: string;
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const { client } = useSupabaseClient();
  const queryClient = useQueryClient();

  const { data, error, mutate } = useMutation({
    mutationKey: ["savePlan"],
    mutationFn: async (newStatus: string) => {
      return await updateActionStatus(action.id, newStatus, client);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["plan", { id: planId }],
        refetchType: "all",
      });
    },
  });

  return (
    <div
      className={`bg-white rounded-md p-4 hover:drop-shadow-md text-primary cursor-pointer ${className}`}>
      <div className="flex justify-between gap-2">
        <div
          onClick={() => setCollapsed(!collapsed)}
          className="flex-col w-full">
          <h3 className="text-lg font-bold">{action.action}</h3>
          <p className="text-text">{action.output} </p>
        </div>
        <div>
          <select
            defaultValue={action.status}
            className="select select-bordered"
            onChange={(e) => {
              const newStatus = e.target.value;
              if (newStatus !== action.status) {
                mutate(newStatus);
              }
            }}>
            <option value="todo">Not Started</option>
            <option value="inProgress">In Progress</option>
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
