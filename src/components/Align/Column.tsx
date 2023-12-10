import * as React from "react";
import { IAlign } from "@/components/Align/Align.types";

export const Column = ({ children, className }: IAlign.IView) => (
  <div id={`Align-Row`} className={`flex flex-col ${className}`}>
    {children}
  </div>
);
