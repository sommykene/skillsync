import { ActionType } from "@skillsync/app/types/plan";
import { useSupabaseClient } from "@skillsync/hooks/useSupabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { updateActionStatus } from "../queries/updateActionStatus";
import toast from "react-hot-toast";

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

  const { error, mutate } = useMutation({
    mutationKey: ["updateActionStatus", action.id],
    mutationFn: async ({
      newStatus,
      notes,
    }: {
      newStatus: string;
      notes: string;
    }) => {
      return await updateActionStatus(action.id, newStatus, notes, client);
    },
    onSuccess: async () => {
      toast.success("Action updated", {
        duration: 3000,
      });
      await queryClient.invalidateQueries({
        queryKey: ["plan", { id: planId }],
        refetchType: "all",
      });
    },
  });

  useEffect(() => {
    if (error) {
      toast.error("Could not update status. Please try again later.", {
        duration: 3000,
      });
    }
  }, [error]);

  return (
    <div
      data-testid="action-card"
      className={`bg-white rounded-md p-4 hover:drop-shadow-md text-primary cursor-pointer ${className}`}>
      <div className="flex justify-between gap-2">
        <div
          data-testid="action-card-header"
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
                mutate({ newStatus, notes: action.notes || "" });
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
          <p className="text-sm mt-2 italic">notes</p>
          <textarea
            className="text-sm text-text mt-2 w-full h-24 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            placeholder="Add your notes here..."
            defaultValue={action.notes || ""}
            onBlur={(e) => {
              const updatedNotes = e.target.value ?? "";
              if (updatedNotes !== (action.notes || "")) {
                mutate({ newStatus: action.status, notes: updatedNotes });
              }
            }}></textarea>
        </div>
      )}
    </div>
  );
};
