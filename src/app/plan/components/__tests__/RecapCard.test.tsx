import { RecapType, statusEnum } from "@skillsync/app/types/plan";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
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
});
