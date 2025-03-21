"use client";

import { ReactNode } from "react";

export const Badge = ({
  children,
  onClick,
  isSelected,
}: {
  children: ReactNode;
  onClick?: () => void;
  isSelected?: boolean;
}) => {
  const classNames = isSelected
    ? "bg-accent text-white font-semibold hover:bg-accent/90"
    : "bg-secondary hover:text-accent";
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer inline-block  px-2 py-1 rounded-md ${classNames}`}>
      <p>{children}</p>
    </button>
  );
};
