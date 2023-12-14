import { createCustomAction } from "typesafe-actions";
import { IEvent, IParticipant } from "@/utils";

export const setEvent = createCustomAction(
  "Events/setEvent",
  (event: IEvent) => ({
    payload: event,
  })
);

export const addParticipant = createCustomAction(
  "Events/addParticipant",
  (data: { participant: IParticipant; eventId: string }) => ({
    payload: data,
  })
);

export const editParticipant = createCustomAction(
  "Events/editParticipant",
  (data: { participant: IParticipant; eventId: string }) => ({
    payload: data,
  })
);

export const deleteEvent = createCustomAction(
  "Events/deleteEvent",
  (id: string) => ({
    payload: { id },
  })
);

export const deleteParticipant = createCustomAction(
  "Events/deleteParticipant",
  (data: { eventId: string; participantId: string }) => ({
    payload: data,
  })
);
