import {
  ActionType,
  RecapType,
  WeekBreakdownType,
} from "@skillsync/app/types/plan";
import { CheckBadgeIcon } from "@skillsync/assets/CheckBadgeIcon";

export const WeekCard = ({
  week,
  isCurrentWeek,
}: {
  week: WeekBreakdownType;
  isCurrentWeek?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col gap-2 items-center justify-start text-center bg-white rounded-md  p-4 text-primary h-full ${
        isCurrentWeek ? "border border-primary" : ""
      }`}>
      <h3 className="font-semibold text-primary/80">Week {week.weekNumber}</h3>
      <h3 className="text-lg font-bold">{week.objective}</h3>
      <p className="text-text">{week.goal}</p>
      <p className="text-text font-semibold">Tasks</p>
      <div className="flex flex-col text-start gap-2 bg-accent/5 p-4 rounded-md w-[100%] h-[100%]">
        {week.actions.map((action: ActionType) => (
          <div key={action.id} className="flex gap-2">
            <div className="flex items-center justify-center rounded-full">
              <CheckBadgeIcon
                id={action.id}
                className="size-5"
                solid={action.status === "completed"}
              />
            </div>
            <h5 className="text-md">{action.action}</h5>
          </div>
        ))}
      </div>
      <div className="flex flex-col text-start gap-2 bg-secondary p-4 rounded-md h-fit-content w-[100%]">
        {week.recap.map((item: RecapType) => (
          <div key={item.id} className="flex gap-2">
            <div className="flex items-center justify-center rounded-full">
              <CheckBadgeIcon
                id={item.id}
                className="size-5"
                solid={item.status === "completed"}
              />
            </div>
            <h5 className="text-md">{item.action}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
