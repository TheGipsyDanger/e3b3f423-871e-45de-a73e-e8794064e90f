import { IModal } from "./Modal.types";
import Styles from "./Modal.styles";

export const Modal = ({ children }: IModal.IView) => (
  <>
    <Styles.Bg data-testid={`Modal`} className="bg-black opacity-20" />
    <Styles.Bg>
      <Styles.Container>{children}</Styles.Container>
    </Styles.Bg>
  </>
);
