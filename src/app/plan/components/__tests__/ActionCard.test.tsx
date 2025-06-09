import { type ActionType, statusEnum } from "@skillsync/app/types/plan";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { ActionCard } from "../ActionCard";

jest.mock("@skillsync/hooks/useSupabaseClient", () => ({
  useSupabaseClient: jest.fn(() => ({
    client: {}, // Mocked client object
  })),
}));

const queryClient = new QueryClient();
const renderComponent = (component: ReactNode) => {
  return render(
    <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
  );
};

describe("ActionCard Component", () => {
  const mockAction: ActionType = {
    id: "id",
    status: statusEnum.todo,
    action: "Test Action",
    output: "Test Output",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("renders the action title correctly", () => {
    renderComponent(<ActionCard action={mockAction} planId={"planId"} />);
    expect(screen.getByText("Test Action")).toBeInTheDocument();
  });

  it("renders the action output correctly", () => {
    renderComponent(<ActionCard action={mockAction} planId={"planId"} />);
    expect(screen.getByText("Test Output")).toBeInTheDocument();
  });

  it("applies the provided className", () => {
    const customClass = "custom-class";
    renderComponent(
      <ActionCard
        action={mockAction}
        planId={"planId"}
        className={customClass}
      />
    );
    const cardElement = screen.getByTestId("action-card");
    expect(cardElement).toHaveClass(customClass);
  });

  it("has the default styles applied", () => {
    renderComponent(<ActionCard action={mockAction} planId={"planId"} />);
    const cardElement = screen.getByTestId("action-card");
    expect(cardElement).toHaveClass(
      "bg-white rounded-md p-4 hover:drop-shadow-md text-primary cursor-pointer"
    );
  });

  it("opens noted on click", () => {
    renderComponent(<ActionCard action={mockAction} planId={"planId"} />);
    const cardElement = screen.getByTestId("action-card-header");
    waitFor(() => {
      fireEvent.click(cardElement);
    });
    expect(screen.getByText("Add notes here...")).toBeInTheDocument();
  });
});
