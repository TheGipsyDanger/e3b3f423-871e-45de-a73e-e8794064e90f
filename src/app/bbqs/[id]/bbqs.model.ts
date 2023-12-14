import { useState } from "react";
import { useRouter } from "next/navigation";

import * as eventsActions from "@/redux/actions/EventsActions";
import { IParticipant, useAppDispatch, useAppSelector } from "@/utils";

import { IBbqs } from "./bbqs.types";

export const useBbqs = ({ params }: IBbqs.IModelProps): IBbqs.IModel => {
  const [openModal, setOpenModal] = useState<"participant" | "delete" | null>(
    null
  );

  const [showInfos, setShowInfos] = useState(false);

  const router = useRouter();

  const dispatch = useAppDispatch();

  const [selectedParticipant, setSelectedParticipant] = useState<IParticipant>(
    {} as IParticipant
  );

  const event = useAppSelector((state) =>
    state.Events.events.find((item) => item.id === params.id)
  );

  const addParticipant = () => {
    setSelectedParticipant({} as IParticipant);
    setOpenModal("participant");
  };

  const editParticipant = (index: number) => {
    event && setSelectedParticipant(event.participants[index]);
    setOpenModal("participant");
  };

  const closeModal = () => {
    setSelectedParticipant({} as IParticipant);
    setOpenModal(null);
  };

  const openDeletetModal = () => {
    setOpenModal("delete");
  };

  const deleteEvent = () => {
    dispatch(eventsActions.deleteEvent(String(event?.id)));
    router.push("/my-bbqs");
  };

  const deleteParticipant = (participantId: string) => {
    dispatch(
      eventsActions.deleteParticipant({
        eventId: String(event?.id),
        participantId,
      })
    );
  };

  const handleInfos = () => {
    setShowInfos((state) => !state);
  };

  return {
    deleteParticipant,
    openDeletetModal,
    deleteEvent,
    event,
    addParticipant,
    editParticipant,
    closeModal,
    openModal,
    handleInfos,
    showInfos,
    selectedParticipant,
  };
};
