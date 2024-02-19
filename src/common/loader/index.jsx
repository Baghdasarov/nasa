import React from "react";
import { COLORS } from "src/assets/style/colors";
import * as S from "./styled";

export const Loader = ({ size = 20, color = COLORS.green }) => (
  <S.Container>
    <S.Loader color={color} size={size} data-testid="loader" />
  </S.Container>
);
