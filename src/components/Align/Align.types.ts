import { withChildren } from "@/utils";
import { HTMLProps } from "react";

export namespace IAlign {
  export interface IView extends withChildren {
    id?: string;
    className?: HTMLProps<HTMLElement>["className"];
  }
  export interface IModelProps {}
  export interface IModel {}
}
