import styled, { css } from "styled-components";
import { IText } from "./Text.types";

const variantsText = {
  h1: css`
    font-size: 22px;
  `,
  h2: css`
    font-size: 20px;
  `,
  h3: css`
    font-size: 18px;
  `,
  h4: css`
    font-size: 16px;
  `,
  body: css`
    font-size: 13px;
  `,
};

export default {
  Text: styled.span<IText.ITextStyle>`
    ${({ variants }) => variantsText[variants as keyof typeof variantsText]};
  `,
};
