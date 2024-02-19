import * as S from "./styled";

export const NasaItem = ({ item }) => {
  return (
    <S.NasaItemContainer>
      <S.NasaItemImage src={item.links[0].href} />
      <S.NasaItemInfo>
        <S.NasaItemText>{item.data[0].title}</S.NasaItemText>
        {item.data[0]?.location ? (
          <S.NasaItemText>
            <S.BoldText>location:</S.BoldText> {item.data[0]?.location}
          </S.NasaItemText>
        ) : null}
        {item.data[0]?.photographer ? (
          <S.NasaItemText>
            <S.BoldText>photographer:</S.BoldText> {item.data[0]?.photographer}
          </S.NasaItemText>
        ) : null}
      </S.NasaItemInfo>
    </S.NasaItemContainer>
  );
};
