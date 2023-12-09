import { createCustomAction } from "typesafe-actions";

export const setStatus = createCustomAction(
  "Initial/setStatus",
  (status: string) => ({
    payload: status,
  })
);

export const setProperty = createCustomAction(
  "Initial/setProperty",
  (status: string) => ({
    payload: status,
  })
);
