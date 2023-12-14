"use client";
import { FaUserPlus } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";

import { Align } from "@/components/Align";
import { Text } from "@/components/Text";
import { ParticipantsTable } from "@/components/ParticipantsTable";
import { ParticipantForm } from "@/components/ParticipantForm";
import { ConfirmModal } from "@/components/ConfirmModal";
import { SameError } from "@/components/SameError";

import { useBbqs } from "./bbqs.model";
import { IBbqs } from "./bbqs.types";
import Styles from "./bbws.styles";

export default function Bbqs(props: IBbqs.IView) {
  const {
    event,
    addParticipant,
    editParticipant,
    closeModal,
    openModal,
    openDeletetModal,
    deleteEvent,
    deleteParticipant,
    selectedParticipant,
    showInfos,
    handleInfos,
  } = useBbqs(props);

  if (!event) {
    return <SameError message="Evento não encontrado" />;
  }

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.EventHeader>
          <Text variants="h2" className="font-bold">
            {event.title}
          </Text>
          <Align.Row>
            <Styles.IconBtn className="mr-4" onClick={handleInfos}>
              {showInfos ? (
                <HiEyeOff className="text-gray-500" />
              ) : (
                <HiEye className="text-gray-500" />
              )}
            </Styles.IconBtn>
            <Styles.IconBtn className="mr-4" onClick={addParticipant}>
              <FaUserPlus size={20} className="text-blue-500" />
            </Styles.IconBtn>
            <Styles.IconBtn onClick={openDeletetModal}>
              <MdDeleteForever size={20} className="text-red-500" />
            </Styles.IconBtn>
          </Align.Row>
        </Styles.EventHeader>
        {showInfos && (
          <Styles.InforsContainer>
            <Styles.InfosContent>
              <Styles.Infos>
                <Text variants="h4">{"Descrição:"}</Text>
                <Text variants="body">{event.description}</Text>
              </Styles.Infos>
              <Styles.Infos>
                <Text variants="h4">{"Observações:"}</Text>
                <Text variants="body">{event.obs}</Text>
              </Styles.Infos>
            </Styles.InfosContent>
          </Styles.InforsContainer>
        )}
        <ParticipantsTable
          participants={event.participants}
          editParticipant={editParticipant}
          deleteParticipant={deleteParticipant}
        />
        {openModal === "participant" && (
          <ParticipantForm
            participant={selectedParticipant}
            event={event}
            closeModal={closeModal}
          />
        )}
        {openModal === "delete" && (
          <ConfirmModal
            closeModal={closeModal}
            onClick={deleteEvent}
            title={"Deseja deletar o evento?"}
            description="Esta iniciativa representa uma decisão irrevogável, desprovida de possibilidades de retrocesso."
          />
        )}
      </Styles.Content>
    </Styles.Container>
  );
}
