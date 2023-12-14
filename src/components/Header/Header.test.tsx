import { Header } from "./";
import { render } from "@testing-library";

describe("Render Header", () => {
  it("Should be Header exist", () => {
    const { getByTestId } = render(<Header />);
    const currentElement = getByTestId(`Header`);
    expect(currentElement).toBeTruthy();
  });
});
