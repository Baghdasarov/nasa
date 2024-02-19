import React from "react";
import { Loader } from "../loader";
import * as S from "./styled";

export const Button = ({
  label,
  onClick,
  loading = false,
  type = "submit",
  iconStart,
  iconEnd,
  ...rest
}) => {
  return (
    <>
      {loading ? (
        <S.Box>
          <Loader size={16} />
        </S.Box>
      ) : (
        <S.ButtonStyles type={type} onClick={onClick} {...rest}>
          {iconStart}
          {label}
          {iconEnd}
        </S.ButtonStyles>
      )}
    </>
  );
};
