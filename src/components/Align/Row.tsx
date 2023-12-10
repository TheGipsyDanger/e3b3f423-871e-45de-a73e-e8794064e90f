import * as React from "react";
import { IAlign } from "@/components/Align/Align.types";

export const Row = ({ children, className }: IAlign.IView) => (
  <div id={`Align-Row`} className={`flex flex-row ${className}`}>
    {children}
  </div>
);
