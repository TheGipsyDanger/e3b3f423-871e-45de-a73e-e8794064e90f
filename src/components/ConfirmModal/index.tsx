import { Modal } from "@/components/Modal";
import { Button } from "@/components/Button";
import { Align } from "@/components/Align";
import { Text } from "@/components/Text";
import { IoMdClose } from "react-icons/io";

import { IConfirmModal } from "./ConfirmModal.types";
import Styles from "./ConfirmModal.styles";

export const ConfirmModal = ({
  title,
  description,
  onClick,
  closeModal,
}: IConfirmModal.IView) => (
  <div data-testid={`ConfirmModal`}>
    <Modal>
      <Align.Column>
        <Styles.IconBtn data-testid={`ConfirmModalClose`} onClick={closeModal}>
          <IoMdClose />
        </Styles.IconBtn>
        <Text data-testid={`ConfirmModalTitle`} variants="h2" className="mb-4">
          {title}
        </Text>
        <Text
          data-testid={`ConfirmModalDescription`}
          variants="body"
          className="mb-8"
        >
          {description}
        </Text>
      </Align.Column>
      <Button
        isLoading={false}
        label="Confirmar"
        onClick={onClick}
        className="h-[44px] w-full"
      />
    </Modal>
  </div>
);
