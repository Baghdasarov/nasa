import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS } from "src/assets/style/colors";

export const NasaLibrarySinglePageContainer = styled.div``;

export const ShowPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: 144px;

  @media screen and (max-width: 768px) {
    padding-inline: 16px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-block: 20px;
`;

export const Location = styled.p`
  margin-block: 10px;
`;

export const Photographer = styled.p`
  margin-block: 10px;
`;

export const Description = styled.p`
  margin-block: 10px;
`;

export const Keywords = styled.p`
  margin-block: 10px;
`;
export const Date = styled.p`
  margin-block: 10px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  padding-bottom: 20px;
  height: 400px;
  overflow: hidden;
`;

export const BackLink = styled(NavLink)`
  text-decoration: none;
  background-color: ${COLORS.darkgrey};
  color: ${COLORS.white};
  padding: 10px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

export const PageHeading = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: ${COLORS.green};
  text-align: center;
`;

export const BoldText = styled.b`
  font-weight: 500;
  color: ${COLORS.green};
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
