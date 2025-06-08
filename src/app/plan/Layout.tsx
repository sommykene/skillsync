"use client";

import dayjs from "dayjs";
import { ReactNode } from "react";
import { PlanBreakdownType } from "../types/plan";

export const Layout = ({
  children,
  plan,
}: {
  children: ReactNode;
  plan: PlanBreakdownType;
}) => {
  const startDate = dayjs().subtract(1, "week").startOf("week");
  const currentWeek = Math.floor(dayjs().diff(startDate, "week"));

  return (
    <div className="min-h-screen flex items-center justify-start flex-col mb-[100px] relative">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-6 text-center mt-[20vh] bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {plan.title}
        </h1>
        <p className=" font-semibold text-center ">
          You started on {startDate.format("DD MMMM YYYY")} and are on week{" "}
          {currentWeek + 1}
        </p>
      </div>
      {children}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-accent p-2 rounded-full shadow-lg">
        ↑
      </button>
    </div>
  );
};
