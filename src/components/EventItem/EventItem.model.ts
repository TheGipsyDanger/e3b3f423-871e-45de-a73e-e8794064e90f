import { useRouter } from "next/navigation";

import { useCurrency, useSum } from "@/utils";

import { IEventItem } from "./EventItem.types";

export const useEventItem = (
  props: IEventItem.IModelProps
): IEventItem.IModel => {
  const { participants, suggestedValue } = props;

  const router = useRouter();

  const { sum } = useSum();
  const { applyMask } = useCurrency();

  const goToEvent = (id: string) => {
    router.push(`/bbqs/${id}`);
  };

  return {
    ...props,
    goToEvent,
    suggestedValue: applyMask(suggestedValue),
    collection: applyMask(String(sum(participants))),
  };
};
