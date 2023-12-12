import { createCustomAction } from "typesafe-actions";
import { IEvent } from "@/utils";

export const setEvent = createCustomAction(
  "Events/setEvent",
  (event: IEvent) => ({
    payload: event,
  })
);
