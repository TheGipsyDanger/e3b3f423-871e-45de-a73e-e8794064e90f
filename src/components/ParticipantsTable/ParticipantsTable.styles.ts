import tw from "tailwind-styled-components";
import styled from "styled-components";
import { IParticipantsTable } from "@/components/ParticipantsTable/ParticipantsTable.types";

const Th = styled.th.attrs({
  scope: "col",
})``;

export default {
  Table: tw.table`
    w-full 
    text-sm 
    text-left 
    rtl:text-right 
    text-gray-500
  `,
  TableHeader: tw.thead`
  text-xs 
  text-gray-700
  `,
  Th: tw(Th)`
    py-3
  `,
  TableRow: tw.tr`
    bg-white 
    border-b 
    hover:bg-gray-50 
    hover:bg-gray-5
  `,
  TableItem: tw.td` 
    py-4
  `,
  EditLink: tw.a<IParticipantsTable.IAction>`
    font-medium
    cursor-pointer
    ${({ type }) =>
      type === "edit"
        ? "text-blue-500 hover:text-blue-300"
        : "text-red-500 hover:text-red-300"}
  `,
  StatusContainer: tw.div`
    flex
    items-center
  `,
  Status: tw.div<IParticipantsTable.IStatus>`
    h-2.5
    w-2.5 
    rounded-full 
    me-2
    ${({ paid }) => (paid === "paid" ? "bg-green-500" : "bg-red-500")}
  `,
};
