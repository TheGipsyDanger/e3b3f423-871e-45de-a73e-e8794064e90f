import { BsPeopleFill } from "react-icons/bs";

import { Align } from "@/components/Align";
import { Text } from "@/components/Text";
import { useDate } from "@/utils";

import { useEventItem } from "./EventItem.model";
import { IEventItem } from "./EventItem.types";
import Styles from "./EventItem.styles";

export const EventItem = (props: IEventItem.IView) => {
  const { applyDateMask } = useDate();
  const {
    goToEvent,
    suggestedValue,
    participants,
    collection,
    id,
    title,
    date,
    count,
  } = useEventItem(props);

  return (
    <Styles.Container
      id="EventItem"
      count={count}
      onClick={() => goToEvent(id)}
    >
      <Styles.Content>
        <Align.Column className="self-start mb-8">
          <Text variants="h2" className="font-bold text-black">
            {title}
          </Text>
          <Text variants="body" className="self-start text-gray-600">
            <Text variants="body" className="font-bold">
              {"Data: "}
            </Text>
            {applyDateMask(date)}
          </Text>
        </Align.Column>
        <Styles.Infos>
          <Styles.InfosPartOne>
            <BsPeopleFill className="text-black" size={30} />
            <Text variants="h3" className="ml-2 text-black">
              {participants.length}
            </Text>
          </Styles.InfosPartOne>
          <Styles.InfosPartTwo>
            <Styles.InfosPartTwoDetails>
              <Styles.InfosPartTwoRow>
                <Text variants="body" className="font-bold">
                  {"Sugerido: "}
                </Text>
                <Text variants="body" className="font-bold text-gray-500">
                  {suggestedValue}
                </Text>
              </Styles.InfosPartTwoRow>
              <Styles.InfosPartTwoRow>
                <Text variants="body" className="font-bold">
                  {"Arrecadado: "}
                </Text>
                <Text variants="body" className="font-bold text-gray-500">
                  {collection}
                </Text>
              </Styles.InfosPartTwoRow>
            </Styles.InfosPartTwoDetails>
          </Styles.InfosPartTwo>
        </Styles.Infos>
      </Styles.Content>
    </Styles.Container>
  );
};
