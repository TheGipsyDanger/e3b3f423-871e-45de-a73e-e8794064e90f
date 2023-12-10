import { withChildren } from "@/utils";

import { HTMLProps } from "react";

export type ITextVariants = "h1" | "h2" | "h3";

export namespace IText {
  export interface IView extends withChildren {
    variants?: ITextVariants;
    className?: HTMLProps<HTMLElement>["className"];
  }
  export interface IModelProps {}
  export interface IModel {}
  export interface ITextStyle {
    variants?: ITextVariants;
  }
}
