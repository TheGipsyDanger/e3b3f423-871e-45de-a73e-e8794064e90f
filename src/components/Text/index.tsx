import { IText } from "./Text.types";
import Styles from "./Text.styles";

export const Text = ({ variants = "h1", className, children }: IText.IView) => (
  <Styles.Text variants={variants} className={className}>
    {children}
  </Styles.Text>
);
