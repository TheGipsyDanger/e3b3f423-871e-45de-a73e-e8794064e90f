"use client";
import * as React from "react";
import { Align } from "@/components/Align";
import { Text } from "@/components/Text";
import { IHeader } from "@/components/Header/Header.types";
import { useHeader } from "@/components/Header/Header.model";
import { FaRegCalendarPlus } from "react-icons/fa6";
import Image from "next/image";
import Styles from "./Header.styles";

export const Header = (props: IHeader.IView) => {
  const { event } = useHeader({});
  return (
    <Styles.Container id={`Header`}>
      <Align.Row>
        <Image src="/images/logo.png" width={165} height={61} alt="logo" />
      </Align.Row>
      <Align.Row>
        <Styles.NextEventContainer>
          <Styles.NextEventContent>
            <Text variants="body" className="text-black">
              Próximo:
            </Text>
            <Text variants="body" className="text-black">
              {event.title}
            </Text>
          </Styles.NextEventContent>
        </Styles.NextEventContainer>
        <Styles.IconBtn>
          <FaRegCalendarPlus size={28} className="text-blue-500" />
        </Styles.IconBtn>
      </Align.Row>
    </Styles.Container>
  );
};
