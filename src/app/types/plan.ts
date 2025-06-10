export type ActionType = {
  id: string;
  action: string;
  output: string;
  status: statusEnum;
  dateCompleted?: string;
  notes?: string;
};

export type RecapType = {
  id: string;
  action: string;
  status: statusEnum;
  dateCompleted?: string;
  notes?: string;
};

export type WeekBreakdownType = {
  id: string;
  weekNumber: number;
  objective: string;
  goal: string;
  actions: ActionType[];
  recap: RecapType[];
};

export type FinalOutcomeType = {
  id: string;
  outcome: string;
  status: statusEnum;
  dateCompleted?: string;
};

export type PlanType = {
  id: string;
  pathId: string;
  selectedTopics: string[];
  summary: string;
  title: string;
  startDate: string;
  dateCompleted?: string;
};

export type PlanBreakdownType = {
  id: string;
  pathId: string;
  summary: string;
  title: string;
  startDate: string;
  dateCompleted?: string;
  weeks: WeekBreakdownType[];
  finalOutcomes: FinalOutcomeType[];
};

export type LearningPathType = {
  id: string;
  title: string;
  focus: string;
  topics: string[];
};

export enum statusEnum {
  todo = "todo",
  pending = "pending",
  inProgress = "inProgress",
  completed = "completed",
  skipped = "skipped",
}
