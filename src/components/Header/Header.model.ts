import { IHeader } from "@/components/Header/Header.types";
import { useAppSelector, useDate } from "@/utils";

export const useHeader = (props: IHeader.IModelProps): IHeader.IModel => {
  const { sortDate } = useDate();
  const events = useAppSelector((state) => state.Events.events);
  return {
    event: sortDate(events)[0],
  };
};
