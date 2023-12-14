import { SameError } from "./";
import { render } from "@testing-library";

describe("Render SameError", () => {
  it("Should be SameError exist", () => {
    const { getByTestId } = render(<SameError />);
    const currentElement = getByTestId(`SameError`);
    expect(currentElement).toBeTruthy();
  });
});
