import { IParticipant } from "@/utils";

export namespace IParticipantsTable {
  export interface IView {
    editParticipant: (index: number) => void;
    deleteParticipant: (participantId: string) => void;
    participants: IParticipant[];
  }
  export interface IModelProps extends IView {}
  export interface IModel extends IView {
    collection: string;
  }
  export interface IStatus {
    paid: string;
  }
  export interface IAction {
    type: "edit" | "delete";
  }
}
