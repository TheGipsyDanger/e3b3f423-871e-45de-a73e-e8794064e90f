import { ConfirmModal } from "./";
import { render } from "@testing-library";

describe("Render ConfirmModal", () => {
  it("Should be ConfirmModal exist", () => {
    const { getByTestId } = render(<ConfirmModal />);
    const currentElement = getByTestId(`ConfirmModal`);
    expect(currentElement).toBeTruthy();
  });
});
