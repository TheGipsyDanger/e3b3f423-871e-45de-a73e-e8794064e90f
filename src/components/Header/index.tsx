import * as React from "react";
import { Align } from "@/components/Align";
import { IHeader } from "@/components/Header/Header.types";

export const Header = (props: IHeader.IView) => (
  <div
    id={`Header`}
    className="flex flex-1 h-[80px] lg:px-16 px-8 bg-white drop-shadow-sm items-center justify-center sm:justify-end"
  >
    <Align.Row>
      <div className="w-[180px] h-[60px] rounded bg-red-500 mr-2"></div>
      <div className="w-[60px] h-[60px] rounded-full bg-red-500"></div>
    </Align.Row>
  </div>
);
