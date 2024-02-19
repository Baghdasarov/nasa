import styled from "styled-components";
import { COLORS } from "src/assets/style/colors";

const buttonColors = {
  green: COLORS.primary,
  gray: COLORS.grey,
  purple: COLORS.purple,
  red: COLORS.red,
};

export const ButtonStyles = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  text-transform: uppercase;
  transition-duration: 0.28s;
  transition-property: box-shadow, transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  min-width: ${({ minwidth }) => (minwidth ? minwidth + "px" : "none")};
  font-size: 0.875rem;
  border-radius: 4px;
  background-color: ${({ mode }) => buttonColors[mode] || buttonColors.green};
  border-color: ${({ mode }) => buttonColors[mode] || buttonColors.green};
  color: ${({ mode }) => (mode !== "gray" ? COLORS.white : COLORS.dark)};
  padding: 12px 34px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 10px #000;
  }
`;

export const Box = styled.div`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  min-width: 140px;
`;
