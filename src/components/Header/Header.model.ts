import { useRouter } from "next/navigation";

import { useAppSelector, useDate } from "@/utils";

import { IHeader } from "./Header.types";

export const useHeader = (): IHeader.IModel => {
  const { sortDate } = useDate();
  const router = useRouter();
  const events = useAppSelector((state) => state.Events.events);

  const goToCreateEvent = () => {
    return router.push("/create-bbqs");
  };

  const goToHome = () => {
    return router.push("/my-bbqs");
  };

  return {
    goToHome,
    goToCreateEvent,
    event: sortDate(events)[0],
  };
};
