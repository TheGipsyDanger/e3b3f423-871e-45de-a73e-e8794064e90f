import styled, { css } from "styled-components";
import { IText } from "./Text.types";

const variantsText = {
  h1: css`
    font-size: ${({ theme }) => theme.fontSizes.h1}px;
  `,
  h2: css`
    font-size: ${({ theme }) => theme.fontSizes.h2}px;
  `,
  h3: css`
    font-size: ${({ theme }) => theme.fontSizes.h3}px;
  `,
  h4: css`
    font-size: ${({ theme }) => theme.fontSizes.h4}px;
  `,
  body: css`
    font-size: ${({ theme }) => theme.fontSizes.body}px;
  `,
};

export default {
  Text: styled.text<IText.ITextStyle>`
    ${({ variants }) => variantsText[variants as keyof typeof variantsText]};
  `,
};
