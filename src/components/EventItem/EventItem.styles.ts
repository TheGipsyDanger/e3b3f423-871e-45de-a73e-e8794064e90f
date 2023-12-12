import styled from "styled-components";
import tw from "tailwind-styled-components";
import { Align } from "@/components/Align";
import { BsPeopleFill } from "react-icons/bs";

export default {
  Container: tw(Align.Column)`
    flex
    w-full 
    sm:w-1/2 
    md:w-1/2 
    lg:w-1/3 
    h-[220px] 
  `,
};
