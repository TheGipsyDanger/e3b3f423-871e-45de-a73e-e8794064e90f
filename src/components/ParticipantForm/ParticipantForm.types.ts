import {
  IControl,
  ITrigger,
  IHandlerSubmit,
  IFormErros,
  IParticipantForm as IParticipantFormType,
  IParticipant,
  IEvent,
} from "@/utils";

export namespace IParticipantForm {
  export interface IView {
    event: IEvent;
    participant?: IParticipant;
    closeModal: () => void;
  }
  export interface IModelProps extends IView {}
  export interface IModel extends IView {
    suggestedValue: string;
    control: IControl<IParticipantFormType<string>>;
    trigger: ITrigger<IParticipantFormType<string>>;
    handleSubmit: IHandlerSubmit<IParticipantFormType<string>>;
    errors: IFormErros<IParticipantFormType<string>>;
    onSubmit: (data: IParticipantFormType<string>) => void;
    isValid: boolean;
    isLoading: boolean;
    isEdit: boolean;
  }
}
