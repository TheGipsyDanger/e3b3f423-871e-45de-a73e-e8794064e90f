import { IEvent } from "@/utils";
import { format } from "date-fns";

export const useDate = () => {
  const sortDate = (events: IEvent[]): IEvent[] => {
    return [...events].sort((event1, event2) => {
      const date1 = new Date(event1.date);
      const date2 = new Date(event2.date);
      return date1.getTime() - date2.getTime();
    });
  };

  const applyDateMask = (date: string): string => {
    return format(new Date(date), "dd/MM/yyyy");
  };

  return {
    sortDate,
    applyDateMask,
  };
};
