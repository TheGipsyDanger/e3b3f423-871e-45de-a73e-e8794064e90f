import { ParticipantForm } from "./";
import { render } from "@testing-library";

describe("Render ParticipantForm", () => {
  it("Should be ParticipantForm exist", () => {
    const { getByTestId } = render(<ParticipantForm />);
    const currentElement = getByTestId(`ParticipantForm`);
    expect(currentElement).toBeTruthy();
  });
});
