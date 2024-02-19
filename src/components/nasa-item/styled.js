import styled from "styled-components";
import { COLORS } from "src/assets/style/colors";

export const NasaItemContainer = styled.div`
  width: 100%;
  min-height: 350px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 200px;
  }

  @media screen and (max-width: 540px) {
    width: 100%;
    min-height: 230px;
  }
`;

export const NasaItemImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 200px;
  }

  @media screen and (max-width: 540px) {
    width: 100%;
    height: 200px;
  }
`;

export const NasaItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
`;

export const NasaItemText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.dark};
  padding-block: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const BoldText = styled.b`
  font-size: 18px;
  font-weight: 500;
  color: ${COLORS.green};
`;
