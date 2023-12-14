"use client";
import { EventItem } from "@/components/EventItem";
import { SameError } from "@/components/SameError";

import { useMyBbqs } from "./my-bbqs.model";
import Styles from "./my-bbqs.styles";

export default function MyBbqs() {
  const { events } = useMyBbqs();

  if (!events.length) {
    return <SameError message={"Nenhum evento cadastrado"} />;
  }

  return (
    <Styles.Container>
      {events.map((event, index) => (
        <EventItem key={index} count={events.length} {...event} />
      ))}
    </Styles.Container>
  );
}
