import { HTMLInputTypeAttribute } from "react";
import {
  IFormErrosAccepeted,
  IFormInputNameAccepeted,
  ITriggerFormInput,
} from "@/utils";

export namespace IInput {
  export interface IView {
    id: string;
    label?: string;
    value: string;
    type?: HTMLInputTypeAttribute;
    placeholder?: string;
    required?: boolean;
    errors: IFormErrosAccepeted;
    name: IFormInputNameAccepeted;
    trigger: ITriggerFormInput;
    onChange: (...event: any[]) => void;
  }
  export interface IModelProps {}
  export interface IModel {}
}
