"use client";
import { FaRegCalendarPlus } from "react-icons/fa6";
import Image from "next/image";

import { Align } from "@/components/Align";
import { Text } from "@/components/Text";

import { useHeader } from "./Header.model";
import Styles from "./Header.styles";

export const Header = () => {
  const { event, goToCreateEvent, goToHome } = useHeader();
  return (
    <Styles.Container data-testid={`Header`}>
      <Align.Row>
        <button data-testid={`HeaderLogoAction`} onClick={goToHome}>
          <Image
            data-testid={`HeaderLogo`}
            alt="logo da marca com um icone de um boi e uma escrita com trinca bbq"
            src="/images/logo.png"
            width={165}
            height={61}
          />
        </button>
      </Align.Row>
      <Align.Row>
        {event?.title && (
          <Styles.NextEventContainer data-testid={`HeaderNextEvent`}>
            <Styles.NextEventContent>
              <Text variants="body">Próximo:</Text>
              <Text variants="body" data-testid={`HeaderNextEventTitle`}>
                {event?.title}
              </Text>
            </Styles.NextEventContent>
          </Styles.NextEventContainer>
        )}
        <Styles.IconBtn data-testid={`HeaderAction`} onClick={goToCreateEvent}>
          <FaRegCalendarPlus size={24} className="text-blue-500" />
        </Styles.IconBtn>
      </Align.Row>
    </Styles.Container>
  );
};
