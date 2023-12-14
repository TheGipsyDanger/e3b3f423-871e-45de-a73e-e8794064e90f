import tw from "tailwind-styled-components";
import { Align } from "@/components/Align";

export default {
  Bg: tw.div`
    flex
    overflow-y-auto
    overflow-x-hidden
    fixed
    top-0
    right-0 
    left-0
    z-50
    justify-center
    items-center
    w-full
    md:inset-0
    h-[calc(100%-1rem)]
    max-h-full
  `,
  Container: tw.div`
    relative
    bg-white
    p-4
    w-full
    max-w-md
    max-h-full
    rounded-lg
  `,
  Content: tw.div`
    flex 
    items-center 
    justify-between 
    p-4
  `,
  IconBtn: tw.button`
    w-[36px] 
    h-[36px] 
    rounded-full 
    border 
    items-center 
    justify-center 
    flex
    self-end
  hover:bg-slate-100
  `,
  CheckboxInputContainer: tw(Align.Row)`
    flex
    items-center
    mb-4
    mr-4
  `,
  Checkbox: tw.input`
    w-4 
    h-4
  text-blue-500
  bg-gray-100
  rounded 
  `,
};
