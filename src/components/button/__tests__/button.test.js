import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button.component";

describe("button tests", () => {
  test("should render base button when nothing is passed", () => {
    render(<Button>Test</Button>);

    const buttonElement = screen.getByText(/test/i);
    expect(buttonElement).toHaveStyle("background-color: black");
  });

  test("should render google button when passed google button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);

    const googleButtonElement = screen.getByRole("button");
    expect(googleButtonElement).toHaveStyle(" background-color: #4285f4");
  });

  test("should render inverted button when passes inverted button type", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);

    const invertedButtonElement = screen.getByRole("button");
    expect(invertedButtonElement).toHaveStyle(" background-color: white");
  });

  test("should be disabled if isLoading is true", () => {
    render(<Button isLoading={true} />);

    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });
});
