import { Text } from "@/components/Text";

import { ISameError } from "./SameError.types";
import Styles from "./SameError.styles";

export const SameError = ({ message }: ISameError.IView) => (
  <Styles.Container id={"SameError"}>
    <Text variants="h1" className="self-center font-bold">
      {`Ops !!!`}
    </Text>
    <Text variants="h1" className="self-center font-bold">
      {message}
    </Text>
  </Styles.Container>
);
