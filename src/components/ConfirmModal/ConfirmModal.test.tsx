import "@testing-library/jest-dom";
import { ConfirmModal } from "./";
import { render, screen } from "@testing-library/react";

const closeMK = jest.fn();
const delMK = jest.fn();

const title = "Deseja deletar o evento?";
const description =
  "Esta iniciativa representa uma decisão irrevogável, desprovida de possibilidades de retrocesso.";

const Component = () => (
  <ConfirmModal
    closeModal={closeMK}
    onClick={delMK}
    title={title}
    description={description}
  />
);

describe("Render ConfirmModal", () => {
  it("Should be ConfirmModal exist", () => {
    render(<Component />);
    expect(screen.getByTestId("ConfirmModal")).toBeInTheDocument();
  });
  it("Should be a correct props", () => {
    render(<Component />);
    expect(screen.getByTestId("ConfirmModal")).toBeInTheDocument();
    expect(screen.getByTestId("ConfirmModalTitle")).toBeInTheDocument();
    expect(screen.getByTestId("ConfirmModalTitle")).toHaveTextContent(title);
    expect(screen.getByTestId("ConfirmModalDescription")).toBeInTheDocument();
    expect(screen.getByTestId("ConfirmModalDescription")).toHaveTextContent(
      description
    );
  });
  it("Should be a correct clicks", () => {
    render(<Component />);
    const closeBTN = screen.getByTestId("ConfirmModalClose");
    closeBTN.click();
    expect(closeMK).toHaveBeenCalled();
    const confirmBTN = screen.getByTestId("Button");
    confirmBTN.click();
    expect(delMK).toHaveBeenCalled();
  });
});
