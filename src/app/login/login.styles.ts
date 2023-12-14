import tw from "tailwind-styled-components";
import { Align } from "@/components/Align";

export default {
  Container: tw(Align.Row)`
    flex
    flex-1
    justify-center
  `,
  Content: tw(Align.Column)`
    w-full 
    px-8 
    md:w-1/2 
    md:px-0
  `,
};
