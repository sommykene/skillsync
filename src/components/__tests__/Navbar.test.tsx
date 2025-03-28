import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "../Navbar";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

jest.mock("@clerk/nextjs", () => ({
  SignedIn: jest.fn(({ children }) => <>{children}</>), // Make it a mock function
  SignedOut: jest.fn(({}) => <></>),
  SignOutButton: () => <button>Sign Out</button>,
  useUser: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("Navbar Component", () => {
  beforeEach(() => {
    (useUser as jest.Mock).mockReturnValue({ user: { firstName: "John" } });
    (usePathname as jest.Mock).mockReturnValue("/");
  });

  it("renders the logo and SkillSync text", () => {
    render(<Navbar />);
    expect(screen.getByAltText("SS")).toBeInTheDocument();
    expect(screen.getByText("SkillSync")).toBeInTheDocument();
  });

  it("renders desktop links when signed in", () => {
    (SignedIn as jest.Mock).mockImplementation(({ children }) => (
      <>{children}</>
    ));
    (SignedOut as jest.Mock).mockImplementation(({}) => <></>);
    (useUser as jest.Mock).mockReturnValue({ user: { firstName: "John" } });

    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("My Plans")).toBeInTheDocument();
    expect(screen.getByText("Generate")).toBeInTheDocument();
    expect(screen.getByText("Hi John")).toBeInTheDocument();
    expect(screen.getByText("My Profile")).toBeInTheDocument();
    expect(screen.getByText("Sign Out")).toBeInTheDocument();

    expect(screen.queryByText("Sign In")).not.toBeInTheDocument();
    expect(screen.queryByText("Sign Up")).not.toBeInTheDocument();
  });

  it("renders desktop links when signed out", () => {
    (SignedIn as jest.Mock).mockImplementation(({}) => <></>);
    (SignedOut as jest.Mock).mockImplementation(({ children }) => (
      <>{children}</>
    ));

    (useUser as jest.Mock).mockReturnValue({ user: null });
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Sign In")).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();

    expect(screen.queryByText("My Plans")).not.toBeInTheDocument();
    expect(screen.queryByText("Generate")).not.toBeInTheDocument();
    expect(screen.queryByText("Hi John")).not.toBeInTheDocument();
    expect(screen.queryByText("My Profile")).not.toBeInTheDocument();
    expect(screen.queryByText("Sign out")).not.toBeInTheDocument();
  });

  it("toggles the mobile menu when the button is clicked", () => {
    render(<Navbar />);
    const toggleButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("menu-open")).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("menu-closed")).toBeInTheDocument();
  });

  it("renders mobile links when menu is open", () => {
    (SignedIn as jest.Mock).mockImplementation(({ children }) => (
      <>{children}</>
    ));
    (SignedOut as jest.Mock).mockImplementation(({}) => <></>);
    render(<Navbar />);
    const toggleButton = screen.getByLabelText("Toggle menu");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("mobile-links-list")).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.queryByTestId("mobile-links-list")).not.toBeInTheDocument();
  });
});
