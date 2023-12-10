import { withChildren } from "@/utils";
import { IFontSizes } from "@/styles";

import { HTMLProps } from "react";

export namespace IText {
  export interface IView extends withChildren {
    variants?: keyof IFontSizes;
    className?: HTMLProps<HTMLElement>["className"];
  }
  export interface IModelProps {}
  export interface IModel {}
  export interface ITextStyle {
    variants?: keyof IFontSizes;
  }
}
