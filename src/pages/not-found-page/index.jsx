import * as S from "./styled";

const NotFoundPage = () => {
  return (
    <S.NotFoundPageContainer>
      <S.NotFoundHeading>404 - Page Not Found</S.NotFoundHeading>
      <S.NotFoundMessage>
        Oops! The page you are looking for could not be found.
      </S.NotFoundMessage>
    </S.NotFoundPageContainer>
  );
};

export default NotFoundPage;
