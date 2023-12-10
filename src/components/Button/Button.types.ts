import { ButtonHTMLAttributes } from "react";

export namespace IButton {
  export interface IView extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
  }
  export interface IModelProps {}
  export interface IModel {}
}
