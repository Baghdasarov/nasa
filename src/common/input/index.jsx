import React from "react";
import * as S from "./styled";

export const Input = ({ type, placeholder, register, error, ...rest }) => {
  return (
    <S.InputWrapper>
      <S.Input placeholder={placeholder} type={type} {...register} {...rest} />

      {<S.ErrorMessage>{error ? error?.message : null}</S.ErrorMessage>}
    </S.InputWrapper>
  );
};
