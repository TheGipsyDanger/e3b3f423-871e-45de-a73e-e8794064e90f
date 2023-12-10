import * as React from "react";
import { IText } from "@/components/Text/Text.types";
import S from "@/components/Text/Text.styles";

export const Text = ({ variants = "h1", className, children }: IText.IView) => (
  <S.Text variants={variants} className={className}>
    {children}
  </S.Text>
);
