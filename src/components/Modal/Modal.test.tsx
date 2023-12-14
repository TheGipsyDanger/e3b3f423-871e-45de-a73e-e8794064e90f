import { Modal } from "./";
import { render } from "@testing-library";

describe("Render Modal", () => {
  it("Should be Modal exist", () => {
    const { getByTestId } = render(<Modal />);
    const currentElement = getByTestId(`Modal`);
    expect(currentElement).toBeTruthy();
  });
});
