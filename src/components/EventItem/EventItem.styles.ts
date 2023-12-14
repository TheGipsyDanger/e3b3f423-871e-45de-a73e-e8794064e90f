import tw from "tailwind-styled-components";
import { Align } from "@/components/Align";
import { IEventItem } from "./EventItem.types";

export default {
  Container: tw.button<IEventItem.IContainer>`
    flex
    w-full 
    h-[220px]
    mb-4
    ${(p) => p.count === 1 && "w-full"}
    ${(p) => p.count === 2 && "sm:w-1/2"}
    ${(p) => p.count > 2 && "sm:w-1/2 md:w-1/2 lg:w-1/3"}
  `,
  Content: tw(Align.Column)`
    flex 
    flex-1 
    h-full 
    m-2 
    shadow-md 
    rounded-lg 
    justify-center 
    px-8
    hover:bg-gray-50 
    cursor-pointer
  `,
  Infos: tw(Align.Row)`
    justify-between
  `,
  InfosPartOne: tw(Align.Row)`
    items-center
  `,
  InfosPartTwo: tw(Align.Row)`
    flex-1 
    items-center
  `,
  InfosPartTwoDetails: tw(Align.Column)`
    flex 
    flex-1 
    px-6
  `,
  InfosPartTwoRow: tw(Align.Row)`
    flex 
    flex-1 
    justify-between
  `,
};
