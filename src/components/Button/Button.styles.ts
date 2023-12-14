import tw from "tailwind-styled-components";
import { IButton } from "./Button.types";

export default {
  Container: tw.button<IButton.IContainer>`
    text-white 
    font-semibold 
    rounded-lg 
    shadow-md 
    focus:outline-none 
    focus:ring-2 
    focus:ring-opacity-75 
    ${({ disablestatus }) =>
      disablestatus === "true"
        ? "bg-gray-500 hover:bg-gray-700 focus:ring-gray-400"
        : "bg-blue-500 hover:bg-blue-700 focus:ring-blue-400"}
  `,
};
