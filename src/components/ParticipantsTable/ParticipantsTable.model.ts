import { IParticipantsTable } from "./ParticipantsTable.types";
import { useCurrency, useSum } from "@/utils";

export const useParticipantsTable = (
  props: IParticipantsTable.IModelProps
): IParticipantsTable.IModel => {
  const { participants } = props;
  const { applyMask } = useCurrency();
  const { sum } = useSum();

  return {
    ...props,
    collection: applyMask(String(sum(participants))),
  };
};
