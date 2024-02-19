import styled from "styled-components";
import { COLORS } from "src/assets/style/colors";

export const InputWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  position: relative;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${COLORS.darkGrey};
  border: none;
  color: ${COLORS.primary};
  padding: 12px 24px;
  border-radius: 4px;
  outline: none;

  &::placeholder {
    color: ${COLORS.primary};
  }

  &:focus {
    border-color: ${COLORS.white};
  }
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: ${COLORS.red};
  margin-top: 2px;
  height: 16px;
`;
