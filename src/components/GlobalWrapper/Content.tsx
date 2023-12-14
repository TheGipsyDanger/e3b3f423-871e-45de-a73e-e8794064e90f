import { IGlobalWrapper } from "./GlobalWrapper.types";

export const Content = ({ children }: IGlobalWrapper.IView) => (
  <div id={`GlobalWrapper`} className="flex w-[1024px] h-screen pt-8">
    {children}
  </div>
);
