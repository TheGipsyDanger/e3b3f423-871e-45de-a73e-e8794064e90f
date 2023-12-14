import { EventItem } from "./";
import { render } from "@testing-library";

describe("Render EventItem", () => {
  it("Should be EventItem exist", () => {
    const { getByTestId } = render(<EventItem />);
    const currentElement = getByTestId(`EventItem`);
    expect(currentElement).toBeTruthy();
  });
});
