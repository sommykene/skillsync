import { render, screen } from "@testing-library/react";
import { ActionCard } from "../ActionCard";
import { ActionType } from "@skillsync/utils/breakdowns";

describe("ActionCard Component", () => {
  const mockAction: ActionType = {
    id: "id",
    status: "Not Started",
    action: "Test Action",
    output: "Test Output",
  };

  it("renders the action title correctly", () => {
    render(<ActionCard action={mockAction} />);
    expect(screen.getByText("Test Action")).toBeInTheDocument();
  });

  it("renders the action output correctly", () => {
    render(<ActionCard action={mockAction} />);
    expect(screen.getByText("Test Output")).toBeInTheDocument();
  });

  it("applies the provided className", () => {
    const customClass = "custom-class";
    render(<ActionCard action={mockAction} className={customClass} />);
    const cardElement = screen.getByText("Test Action").closest("div");
    expect(cardElement).toHaveClass(customClass);
  });

  it("has the default styles applied", () => {
    render(<ActionCard action={mockAction} />);
    const cardElement = screen.getByText("Test Action").closest("div");
    expect(cardElement).toHaveClass(
      "bg-white rounded-md p-4 hover:drop-shadow-md text-primary cursor-pointer"
    );
  });
});
