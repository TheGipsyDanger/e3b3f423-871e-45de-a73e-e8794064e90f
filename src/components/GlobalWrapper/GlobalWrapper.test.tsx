import { GlobalWrapper } from "./";
import { render } from "@testing-library";

describe("Render GlobalWrapper", () => {
  it("Should be GlobalWrapper exist", () => {
    const { getByTestId } = render(<GlobalWrapper />);
    const currentElement = getByTestId(`GlobalWrapper`);
    expect(currentElement).toBeTruthy();
  });
});
