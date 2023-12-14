import { useAppSelector } from "@/utils";

import { IMyBbqs } from "./my-bbqs.types";

export const useMyBbqs = (): IMyBbqs.IModel => {
  const events = useAppSelector((state) => state.Events.events);
  return {
    events,
  };
};
