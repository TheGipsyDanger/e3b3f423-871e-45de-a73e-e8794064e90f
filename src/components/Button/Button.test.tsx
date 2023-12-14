import "@testing-library/jest-dom";
import { Button } from "./";
import { render, screen } from "@testing-library/react";

const FNMock = jest.fn();

describe("Render Button", () => {
  it("Should be Button exist", () => {
    render(
      <Button
        isLoading={false}
        label="Entrar"
        disabled={true}
        onClick={() => {}}
      />
    );
    expect(screen.getByTestId("Button")).toBeInTheDocument();
  });
  it("It should be not clickable", () => {
    render(
      <Button
        isLoading={false}
        label="Entrar"
        disabled={true}
        onClick={FNMock}
      />
    );
    const button = screen.getByTestId("Button");
    button.click();
    expect(FNMock).toHaveBeenCalledTimes(0);
  });
  it("It should be clickable", () => {
    render(
      <Button
        isLoading={false}
        label="Entrar"
        disabled={false}
        onClick={FNMock}
      />
    );
    const button = screen.getByTestId("Button");
    button.click();
    expect(FNMock).toHaveBeenCalled();
  });
});
