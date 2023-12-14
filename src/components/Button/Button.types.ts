import { ButtonHTMLAttributes } from "react";

export namespace IButton {
  export interface IView extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    isLoading: boolean;
  }
  export interface IModelProps {}
  export interface IModel {}
  export interface IContainer {
    disabledStatus: string;
  }
}
