import { PlanBreakdown } from "@skillsync/utils/breakdowns";

interface PlanResponse {
  plan?: PlanBreakdown;
  error?: string;
}

export type ActionType = {
  id: string;
  action: string;
  output: string;
  status: string;
  dateCompleted?: string;
  notes?: string;
};

export type WeekBreakdown = {
  id: string;
  weekNumber: string;
  objective: string;
  goal: string;
  actions: ActionType[];
  recap: {
    id: string;
    action: string;
    status: string;
    dateCompleted?: string;
  }[];
};

export type FinalOutcome = {
  id: string;
  outcome: string;
  status: string;
  dateCompleted?: string;
};

export type PlanBreakdown = {
  id: string;
  pathId: string;
  summary: string;
  title: string;
  startDate: string;
  dateCompleted?: string;
  weeks: WeekBreakdown[];
  finalOutcomes: FinalOutcome[];
};

export type LearningPathType = {
  id: string;
  title: string;
  focus: string;
  topics: string[];
};
