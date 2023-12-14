import { IText } from "./Text.types";
import Styles from "./Text.styles";

export const Text = ({
  variants = "h1",
  className,
  children,
  ...rest
}: IText.IView) => (
  <Styles.Text {...rest} variants={variants} className={className}>
    {children}
  </Styles.Text>
);
