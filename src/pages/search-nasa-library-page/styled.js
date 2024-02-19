import { COLORS } from "src/assets/style/colors";
import styled from "styled-components";

export const SearchNasaLibraryPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 144px;

  @media screen and (max-width: 1024px) {
    padding-inline: 30px;
  }

  @media screen and (max-width: 768px) {
    padding-inline: 16px;
  }
`;

export const SearchBarWrapper = styled.form`
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  gap: 20px;

  button {
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    padding-block: 10px;
  }
`;

export const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ErrorMessage = styled.p`
  font-size: 16px;
  color: ${COLORS.red};
  margin-top: 2px;
  height: 16px;
`;

export const CollectionsItemContainer = styled.div`
  width: 100%;
  min-height: max-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;

  a {
    width: calc(100% / 3 - 20px);
    text-decoration: none;

    @media screen and (max-width: 768px) {
      width: calc(100% / 2 - 20px);
    }

    @media screen and (max-width: 540px) {
      width: 100%;
    }
  }
`;

export const PaginationContainer = styled.div`
  padding-block: 20px;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 0;

    li {
      cursor: pointer;
      padding: 5px;
      border-radius: 5px;
      color: #fff;
      background-color: #333;
      transition: background-color 0.3s;

      &:hover {
        background-color: #555;
      }

      &.active {
        background-color: #666;
      }
    }
  }
`;

export const PageHeading = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: ${COLORS.green};
  text-align: center;
`;
