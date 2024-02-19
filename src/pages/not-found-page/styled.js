import styled from "styled-components";
import { COLORS } from "src/assets/style/colors";

export const NotFoundPageContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const NotFoundHeading = styled.h1`
  font-size: 36px;
  color: ${COLORS.darkGrey};
  margin-bottom: 20px;
`;

export const NotFoundMessage = styled.p`
  font-size: 18px;
  color: ${COLORS.green_300};
`;
