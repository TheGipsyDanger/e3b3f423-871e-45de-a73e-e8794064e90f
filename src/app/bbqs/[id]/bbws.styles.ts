import tw from "tailwind-styled-components";
import { Align } from "@/components/Align";

export default {
  Container: tw(Align.Column)`
    flex
    flex-1
    h-screen
  `,
  Content: tw(Align.Column)`
    flex 
    flex-1 
    px-4
    border-b-2
  `,
  EventHeader: tw(Align.Row)`
    flex
    items-center
    justify-between
    pb-4
    mb-8
    border-b-2
  `,
  InforsContainer: tw(Align.Column)`
    pb-4
    mb-8
    border-b-2
  `,
  InfosContent: tw(Align.Row)`
    justify-between
  `,
  Infos: tw(Align.Column)`
    flex
    w-full
  `,
  IconBtn: tw.button`
    w-[40px] 
    h-[40px] 
    rounded-full 
    border 
    items-center 
    justify-center 
    flex
  hover:bg-slate-50
  `,
};
