import React from "react";
import { render, screen } from "@testing-library/react";
import { WeekCard } from "../WeekCard";
import { statusEnum, WeekBreakdownType } from "@skillsync/app/types/plan";

const mockWeek: WeekBreakdownType = {
  id: "week-2",
  weekNumber: 2,
  objective: "Master React Testing",
  goal: "Write robust unit tests for React components.",
  actions: [
    {
      id: "a1",
      status: statusEnum.completed,
      action: "Install testing-library",
      output: "Testing library installed successfully.",
    },
    {
      id: "a2",
      status: statusEnum.todo,
      action: "Write first test",
      output: "",
    },
  ],
  recap: [
    { id: "r1", status: statusEnum.completed, action: "Reviewed test results" },
    { id: "r2", status: statusEnum.todo, action: "Refactor tests" },
  ],
};

describe("WeekCard", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the week number, objective, and goal", () => {
    render(<WeekCard week={mockWeek} />);
    expect(screen.getByText("Week 2")).toBeInTheDocument();
    expect(screen.getByText("Master React Testing")).toBeInTheDocument();
    expect(
      screen.getByText("Write robust unit tests for React components.")
    ).toBeInTheDocument();
    expect(screen.getByText("Tasks")).toBeInTheDocument();
  });

  it("renders all actions with their text", () => {
    render(<WeekCard week={mockWeek} />);
    expect(screen.getByText("Install testing-library")).toBeInTheDocument();
    expect(screen.getByText("Write first test")).toBeInTheDocument();
  });

  it("renders all recap items with their text", () => {
    render(<WeekCard week={mockWeek} />);
    expect(screen.getByText("Reviewed test results")).toBeInTheDocument();
    expect(screen.getByText("Refactor tests")).toBeInTheDocument();
  });

  it("passes correct solid prop to CheckBadgeIcon for actions", () => {
    render(<WeekCard week={mockWeek} />);
    expect(screen.getByTestId("check-badge-icon-solid-a1")).toBeInTheDocument();
    expect(screen.getByTestId("check-badge-icon-a2")).toBeInTheDocument();
  });

  it("passes correct solid prop to CheckBadgeIcon for recap items", () => {
    render(<WeekCard week={mockWeek} />);
    expect(screen.getByTestId("check-badge-icon-solid-r1")).toBeInTheDocument();
    expect(screen.getByTestId("check-badge-icon-r2")).toBeInTheDocument();
  });
});
