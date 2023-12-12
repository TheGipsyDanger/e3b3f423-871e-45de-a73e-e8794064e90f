import tw from "tailwind-styled-components";
import { Align } from "@/components/Align";

export default {
  Container: tw.div`
    flex 
    flex-1 
    h-[80px] 
    lg:px-16 
    px-8 
    bg-white 
    drop-shadow-md 
    items-center 
    justify-center 
    sm:justify-between
  `,
  NextEventContainer: tw.div`
    w-[180px] 
    h-[60px] 
    rounded-md 
    mr-2
  `,
  NextEventContent: tw(Align.Column)`
    flex 
    h-full 
    justify-center 
    mx-4
  `,
  IconBtn: tw.button`
    w-[60px] 
    h-[60px] 
    rounded-full 
    border 
    items-center 
    justify-center 
    flex
     hover:bg-slate-50
  `,
};
