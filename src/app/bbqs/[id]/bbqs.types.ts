import { IEvent, IParticipant } from "@/utils";

export namespace IBbqs {
  export interface IView {
    params: {
      id: string;
    };
  }
  export interface IModelProps extends IView {}
  export interface IModel {
    openModal: "participant" | "delete" | null;
    openDeletetModal: () => void;
    event: IEvent | undefined;
    addParticipant: () => void;
    deleteEvent: () => void;
    closeModal: () => void;
    editParticipant: (index: number) => void;
    deleteParticipant: (id: string) => void;
    showInfos: boolean;
    handleInfos: () => void;
    selectedParticipant: IParticipant;
  }
}
