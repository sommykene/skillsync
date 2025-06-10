import { RecapType } from "@skillsync/app/types/plan";
import { useSupabaseClient } from "@skillsync/hooks/useSupabaseClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRecapStatus } from "../queries/updateRecapStatus";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const RecapCard = ({
  planId,
  recap,
  className,
}: {
  planId: string;
  recap: RecapType;
  className?: string;
}) => {
  const [collapsed, setCollapsed] = useState(true);
  const { client } = useSupabaseClient();
  const queryClient = useQueryClient();

  const { error, mutate } = useMutation({
    mutationKey: ["updateRecapStatus", recap.id],
    mutationFn: async ({
      status,
      notes,
    }: {
      status: string;
      notes: string;
    }) => {
      return await updateRecapStatus(recap.id, status, notes, client);
    },
    onSuccess: async () => {
      toast.success("Recap updated", {
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
      toast.error("Could not update recap status. Please try again later.", {
        duration: 3000,
      });
    }
  }, [error]);

  return (
    <div
      data-testid="recap-card"
      className={`bg-accent/20 rounded-md p-4 hover:drop-shadow-md text-primary cursor-pointer ${className}`}>
      <div className="flex justify-between gap-2">
        <div
          data-testid="recap-card-header"
          onClick={() => setCollapsed(!collapsed)}
          className="flex-col w-full">
          <h3 className="text-lg font-bold">{recap.action}</h3>
        </div>
        <div>
          <select
            defaultValue={recap.status}
            className="select select-bordered"
            onChange={(e) => {
              const newStatus = e.target.value;
              if (newStatus !== recap.status) {
                mutate({ status: newStatus, notes: recap.notes || "" });
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
            defaultValue={recap.notes || ""}
            onBlur={(e) => {
              const updatedNotes = e.target.value ?? "";
              if (updatedNotes !== (recap.notes || "")) {
                mutate({ status: recap.status, notes: updatedNotes });
              }
            }}></textarea>
        </div>
      )}
    </div>
  );
};
