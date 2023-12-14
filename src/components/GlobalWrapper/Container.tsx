import { IGlobalWrapper } from "./GlobalWrapper.types";

export const Container = ({ children }: IGlobalWrapper.IView) => (
  <div id={`Container`} className="flex justify-center h-full w-full">
    {children}
  </div>
);
