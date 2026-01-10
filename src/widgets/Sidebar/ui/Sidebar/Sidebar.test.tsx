import { screen, fireEvent } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { renderWithRouter } from "@/shared/config/jest/renderWithRouter/renderWithRouter";

describe("Sidebar", () => {
  test("render test", () => {
    renderWithRouter(<Sidebar />);
    const sidebar = screen.getByTestId("sidebar");
    expect(sidebar).toBeInTheDocument();
  });

  test("collapse sidebar test", () => {
    renderWithRouter(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-button");
    const sideBar = screen.getByTestId("sidebar");
    fireEvent.click(toggleBtn);
    expect(sideBar).toHaveClass("collapsed");
  });
});
