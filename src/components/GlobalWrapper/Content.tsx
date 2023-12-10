import * as React from "react";
import { IGlobalWrapper } from "@/components/GlobalWrapper/GlobalWrapper.types";

export const Content = ({ children }: IGlobalWrapper.IView) => (
  <div id={`GlobalWrapper`} className="flex w-[1024px] h-screen bg-red-800">
    {children}
  </div>
);
