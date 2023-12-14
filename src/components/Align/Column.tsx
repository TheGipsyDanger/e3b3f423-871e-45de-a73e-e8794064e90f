import { IAlign } from "./Align.types";

export const Column = ({ id = "", children, className }: IAlign.IView) => (
  <div id={id} className={`flex flex-col ${className}`}>
    {children}
  </div>
);
