import { render, screen } from "@testing-library/react";
import { Badge } from "../Badge";

describe("Badge Component", () => {
  it("renders children correctly", () => {
    render(<Badge>Child Text</Badge>);
    expect(screen.getByText("Child Text")).toBeInTheDocument();
  });

  it("applies the 'isSelected' styles when true", () => {
    render(<Badge isSelected>Selected Badge</Badge>);
    const badgeElement = screen.getByText("Selected Badge").parentElement;
    expect(badgeElement).toHaveClass(
      "bg-accent text-white font-semibold hover:bg-accent/90"
    );
  });

  it("applies the default styles when 'isSelected' is false", () => {
    render(<Badge>Default Badge</Badge>);
    const badgeElement = screen.getByText("Default Badge").parentElement;
    expect(badgeElement).toHaveClass("bg-secondary hover:text-accent");
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Badge onClick={handleClick}>Clickable Badge</Badge>);
    const badgeElement = screen.getByText("Clickable Badge").parentElement;
    badgeElement?.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as a button element", () => {
    render(<Badge>Button Badge</Badge>);
    const badgeElement = screen.getByText("Button Badge").parentElement;
    expect(badgeElement?.tagName).toBe("BUTTON");
  });
});
