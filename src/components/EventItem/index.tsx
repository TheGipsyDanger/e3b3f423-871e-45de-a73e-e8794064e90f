import * as React from "react";
import { IEventItem } from "@/components/EventItem/EventItem.types";
import { Align } from "@/components/Align";
import { Text } from "@/components/Text";

export const EventItem = ({ title }: IEventItem.IView) => (
  <Align.Column className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 h-[220px] flex">
    <Align.Column className="flex flex-1 m-2 shadow-xl rounded-lg justify-center items-center">
      <Text variants="body" className="text-black">
        {title}
      </Text>
      <Align.Row className="justify-between">
        <Text variants="body" className="text-black">
          {14}
        </Text>
        <Text variants="body" className="text-black">
          {"R$ 20,00"}
        </Text>
      </Align.Row>
    </Align.Column>
  </Align.Column>
);
