import {
  IControl,
  ITrigger,
  IHandlerSubmit,
  IFormErros,
  ICreateBbqsForm,
} from "@/utils";

export namespace ICreateBbqs {
  export interface IView {}
  export interface IModelProps {}
  export interface IModel {
    control: IControl<ICreateBbqsForm<string>>;
    trigger: ITrigger<ICreateBbqsForm<string>>;
    handleSubmit: IHandlerSubmit<ICreateBbqsForm<string>>;
    errors: IFormErros<ICreateBbqsForm<string>>;
    onSubmit: (data: ICreateBbqsForm<string>) => void;
    isValid: boolean;
    date: Date;
    isLoading: boolean;
    handleDate: (date: Date) => void;
  }
}
