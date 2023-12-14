import { IAlign } from "./Align.types";

export const Row = ({ id = "", children, className }: IAlign.IView) => (
  <div id={id} className={`flex flex-row ${className}`}>
    {children}
  </div>
);
