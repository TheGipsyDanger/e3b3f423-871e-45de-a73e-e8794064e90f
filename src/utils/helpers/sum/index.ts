import { IParticipant } from "@/utils";

export const useSum = () => {
  const sum = (participants: IParticipant[]): number => {
    return participants.reduce((acc, curr) => {
      return (acc += Number(curr.value));
    }, 0);
  };

  return {
    sum,
  };
};
