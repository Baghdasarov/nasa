import ReactDatePicker from "react-datepicker";
import { COLORS } from "src/assets/style/colors";
import styled from "styled-components";

export const DatePicker = styled(ReactDatePicker)`
  min-width: 100px;
  background-color: ${COLORS.darkGrey};
  border: none;
  color: ${COLORS.primary};
  padding: 12px 6px;
  border-radius: 4px;
  text-align: center;
  outline: none;

  &::placeholder {
    color: ${COLORS.primary};
  }

  &:focus {
    border-color: ${COLORS.white};
  }
`;
