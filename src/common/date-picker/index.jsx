import React from "react";
import * as S from "./styled";

export const DatePicker = ({
  selected,
  onChange,
  selectsStart,
  startDate,
  ...rest
}) => {
  return (
    <S.DatePicker
      selected={selected}
      onChange={onChange}
      selectsStart={selectsStart}
      startDate={startDate}
      {...rest}
    />
  );
};
