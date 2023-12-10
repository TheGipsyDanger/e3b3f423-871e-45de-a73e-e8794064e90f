import * as React from "react";
import { IGlobalWrapper } from "@/components/GlobalWrapper/GlobalWrapper.types";

export const Container = ({ children }: IGlobalWrapper.IView) => (
  <div id={`Container`} className="flex justify-center h-screen w-full">
    {children}
  </div>
);
