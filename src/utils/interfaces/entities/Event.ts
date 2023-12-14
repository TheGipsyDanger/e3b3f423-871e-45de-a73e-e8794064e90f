import { IParticipant } from ".";

export interface IEvent {
  id: string;
  title: string;
  description: string;
  obs: string;
  date: string;
  suggestedValue: string;
  participants: IParticipant[];
}
