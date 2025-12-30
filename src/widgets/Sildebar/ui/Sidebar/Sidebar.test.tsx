import { render, screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("render test", () => {
    render(<Sidebar />);
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
  });

  test("collapse sidebar test", () => {
    render(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-button");
    const sideBar = screen.getByTestId("sidebar");
    fireEvent.click(toggleBtn);
    expect(sideBar).toHaveClass("collapsed");
  });
});
