import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nasaLibrarySelector } from "src/libs/redux/nasa-library-slice/selecteros";
import * as S from "./styled";
import { useParams } from "react-router-dom";
import { Carousel } from "src/common/carousel";
import { nasaLibraryActions } from "src/libs/redux/nasa-library-slice/slice";
import { LOADING_STATUSES } from "src/utils/constansts";
import { Loader } from "src/common/loader";

const SearchNasaLibrarySinglePage = () => {
  const { nasaLibraryOneData, nasaAssets, getNasaAssetsStatus } =
    useSelector(nasaLibrarySelector);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(nasaLibraryActions.getNasaAssetsById(id));
    }

    return () => {
      dispatch(nasaLibraryActions.resetNasaLibraryOneData());
    };
  }, [id]);

  return (
    <S.ShowPageContainer>
      <S.PageHeading data-testid="show-page">Show Page</S.PageHeading>
      <S.BackLink to="/">Back</S.BackLink>
      {getNasaAssetsStatus === LOADING_STATUSES.pending ? (
        <S.LoaderContainer>
          <Loader size={40} />
        </S.LoaderContainer>
      ) : (
        <>
          <S.Title>{nasaLibraryOneData?.data?.[0].title}</S.Title>
          {nasaLibraryOneData?.data?.[0].location ? (
            <S.Location>
              <S.BoldText>Location: </S.BoldText>
              {nasaLibraryOneData?.data?.[0].title}
            </S.Location>
          ) : null}
          {nasaLibraryOneData?.data?.[0].photographer ? (
            <S.Photographer>
              <S.BoldText>Photographer: </S.BoldText>
              {nasaLibraryOneData?.data?.[0]?.photographer}
            </S.Photographer>
          ) : null}
          {nasaLibraryOneData?.data?.[0]?.description ? (
            <S.Description>
              <S.BoldText>Description: </S.BoldText>
              {nasaLibraryOneData?.data?.[0]?.description}
            </S.Description>
          ) : null}
          {nasaLibraryOneData?.data?.[0].keywords ? (
            <S.Keywords>
              <S.BoldText>Keywords: </S.BoldText>
              {nasaLibraryOneData?.data?.[0].keywords?.join(", ")}
            </S.Keywords>
          ) : null}
          {nasaLibraryOneData?.data?.[0]?.date_created ? (
            <S.Date>
              <S.BoldText>Date: </S.BoldText>
              {nasaLibraryOneData?.data?.[0]?.date_created}
            </S.Date>
          ) : null}
          <S.ImageContainer>
            <Carousel items={nasaAssets} />
          </S.ImageContainer>
        </>
      )}
    </S.ShowPageContainer>
  );
};

export default SearchNasaLibrarySinglePage;
