import { RecapType, statusEnum } from "@skillsync/app/types/plan";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { RecapCard } from "../RecapCard";

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

describe("RecapCard Component", () => {
  const mockRecap: RecapType = {
    id: "id",
    status: statusEnum.todo,
    action: "Test Recap",
  };

  beforeEach(() => {
    jest.clearAllMocks();
    queryClient.clear();
  });

  it("renders the recap title correctly", () => {
    renderComponent(<RecapCard recap={mockRecap} planId={"planId"} />);
    expect(screen.getByText("Test Recap")).toBeInTheDocument();
  });

  it("applies the provided className", () => {
    const customClass = "custom-class";
    renderComponent(
      <RecapCard recap={mockRecap} planId={"planId"} className={customClass} />
    );
    const cardElement = screen.getByTestId("recap-card");
    expect(cardElement).toHaveClass(customClass);
  });

  it("opens noted on click", () => {
    renderComponent(<RecapCard recap={mockRecap} planId={"planId"} />);
    const cardElement = screen.getByTestId("recap-card-header");
    waitFor(() => {
      fireEvent.click(cardElement);
    });
    expect(
      screen.getByPlaceholderText("Add your notes here...")
    ).toBeInTheDocument();
  });

  it("opens noted on click and displays notes", () => {
    renderComponent(
      <RecapCard
        recap={{ ...mockRecap, notes: "new note here" }}
        planId={"planId"}
      />
    );
    const cardElement = screen.getByTestId("recap-card-header");
    waitFor(() => {
      fireEvent.click(cardElement);
    });

    expect(screen.getByText("new note here")).toBeInTheDocument();
  });
});
