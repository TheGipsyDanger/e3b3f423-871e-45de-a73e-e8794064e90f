"use client";
import { useMyBbqs } from "@/app/my-bbqs/my-bbqs.model";
import { IMyBbqs } from "@/app/my-bbqs/my-bbqs.types";
import { Align } from "@/components/Align";
import { EventItem } from "@/components/EventItem";

export default function MyBbqs(props: IMyBbqs.IView) {
  const { events } = useMyBbqs({});

  return (
    <div className="flex-wrap flex flex-row flex-1 justify-between h-[220px]">
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </div>
  );
}
