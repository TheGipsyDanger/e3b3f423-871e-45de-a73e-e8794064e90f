import { IMyBbqs } from "@/app/my-bbqs/my-bbqs.types";
import { useAppSelector } from "@/utils";

export const useMyBbqs = (props: IMyBbqs.IModelProps): IMyBbqs.IModel => {
  const events = useAppSelector((state) => state.Events.events);
  return {
    events,
  };
};
