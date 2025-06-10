import { render, screen } from "@testing-library/react";
import { LearningPathCard } from "../LearningPathCard";

describe("LearningPathCard Component", () => {
  it("renders the learning path title and focus correctly", () => {
    render(<LearningPathCard path={mockPath} />);
    expect(screen.getByText("Frontend Development")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Focus on building the visual aspects of websites and applications."
      )
    ).toBeInTheDocument();
  });

  it("renders as a link when href is provided", () => {
    render(<LearningPathCard path={mockPath} href="/test-path" />);
    const linkElement = screen.getByTestId("learning-path-card-link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/test-path");
  });

  it("renders as a div when href is not provided", () => {
    render(<LearningPathCard path={mockPath} />);
    const divElement = screen.getByTestId("learning-path-card-div");
    expect(divElement).toBeInTheDocument();
  });

  it("applies the provided className", () => {
    const customClass = "custom-class";
    render(<LearningPathCard path={mockPath} className={customClass} />);
    const cardElement = screen.getByText("Frontend Development").closest("div");
    expect(cardElement).toHaveClass(customClass);
  });

  it("has the default styles applied", () => {
    render(<LearningPathCard path={mockPath} />);
    const cardElement = screen.getByText("Frontend Development").closest("div");
    expect(cardElement).toHaveClass(
      "bg-white rounded-md p-4 hover:drop-shadow-md text-primary cursor-pointer"
    );
  });
});

const mockPath = {
  id: "1",
  title: "Frontend Development",
  focus: "Focus on building the visual aspects of websites and applications.",
  topics: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vue",
    "Angular",
    "UI/UX Design",
    "Responsive Design",
    "Web Accessibility",
  ],
};
