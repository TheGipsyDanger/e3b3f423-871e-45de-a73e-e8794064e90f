import * as React from "react";
import { IEventItem } from "@/components/EventItem/EventItem.types";
import { Align } from "@/components/Align";
import { Text } from "@/components/Text";
import { BsPeopleFill } from "react-icons/bs";
import Styles from "./EventItem.styles";
import { useCurrency } from "@/utils";

export const EventItem = ({ title, suggestedValue }: IEventItem.IView) => {
  const { applyMask } = useCurrency();
  return (
    <Styles.Container>
      <Align.Column className="flex flex-1 m-2 shadow-xl rounded-lg justify-center px-4">
        <Text variants="h1" className="font-bold text-black mb-4">
          {title}
        </Text>
        <Align.Row className="justify-between">
          <Align.Row className="items-center">
            <BsPeopleFill className="text-black" size={30} />
            <Text variants="h3" className="ml-2 text-black">
              {14}
            </Text>
          </Align.Row>
          <Align.Row className="flex-1 items-center">
            <Align.Column className="flex flex-1 px-6">
              <Align.Row className="flex flex-1 justify-between">
                <Text variants="body" className="text-black">
                  {"Sugerido: "}
                </Text>
                <Text variants="body" className="text-black">
                  {applyMask(suggestedValue)}
                </Text>
              </Align.Row>
              {/*  */}
              <Align.Row className="flex flex-1 justify-between">
                <Text variants="body" className="text-black">
                  {"Arrecadado: "}
                </Text>
                <Text variants="body" className="text-black">
                  {applyMask(suggestedValue)}
                </Text>
              </Align.Row>
            </Align.Column>
          </Align.Row>
        </Align.Row>
      </Align.Column>
    </Styles.Container>
  );
};
