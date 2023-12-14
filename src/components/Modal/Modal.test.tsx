import "@testing-library/jest-dom";
import { Modal } from "./";
import { render, screen } from "@testing-library/react";

describe("Render Modal", () => {
  it("Should be Modal exist", () => {
    render(<Modal />);
    expect(screen.getByTestId(`Modal`)).toBeInTheDocument();
  });
});
