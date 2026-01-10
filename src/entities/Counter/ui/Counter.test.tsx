import { fireEvent, screen } from "@testing-library/dom";
import { Counter } from "./Counter";
import { renderWithRouter } from "@/shared/config/jest/renderWithRouter/renderWithRouter";

describe("Counter", () => {
  test("render value title with initial state", () => {
    renderWithRouter(<Counter />, { initialState: { counter: { value: 10 } } });
    const valueTitle = screen.getByTestId("value-title");
    expect(valueTitle).toHaveTextContent("10");
  });

  test("click increment button", () => {
    renderWithRouter(<Counter />, { initialState: { counter: { value: 10 } } });
    const valueTitle = screen.getByTestId("value-title");
    const incrementButton = screen.getByTestId("increment-button");
    fireEvent.click(incrementButton);
    expect(valueTitle).toHaveTextContent("11");
  });

  test("click decrement button", () => {
    renderWithRouter(<Counter />, { initialState: { counter: { value: 10 } } });
    const valueTitle = screen.getByTestId("value-title");
    const decrementButton = screen.getByTestId("decrement-button");
    fireEvent.click(decrementButton);
    expect(valueTitle).toHaveTextContent("9");
  });
});
