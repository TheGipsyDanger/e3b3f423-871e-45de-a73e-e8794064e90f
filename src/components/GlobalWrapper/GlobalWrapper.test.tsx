import "@testing-library/jest-dom";
import { GlobalWrapper } from "./";
import { events } from "@/mocks";
import { render, screen } from "@testing-library/react";

describe("Render GlobalWrapper", () => {
  it("Should be GlobalWrapper Container exist", () => {
    render(<GlobalWrapper.Container />);
    expect(screen.getByTestId(`GlobalWrapperContainer`)).toBeInTheDocument();
  });
  it("Should be GlobalWrapper Content exist", () => {
    render(<GlobalWrapper.Content />);
    expect(screen.getByTestId(`GlobalWrapperContent`)).toBeInTheDocument();
  });
});
