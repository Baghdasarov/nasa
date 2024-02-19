import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "../../common/date-picker";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { Input } from "src/common/input";
import { Button } from "src/common/button";
import { nasaLibraryActions } from "src/libs/redux/nasa-library-slice/slice";
import { NasaItem } from "src/components/nasa-item";
import { LOADING_STATUSES } from "src/utils/constansts";
import { nasaLibrarySelector } from "src/libs/redux/nasa-library-slice/selecteros";
import { nasaSearchSchema } from "src/validations";
import * as S from "./styled";

const SearchNasaLibraryPage = () => {
  const { getNasaLibraryStatus, nasaLibraryData } =
    useSelector(nasaLibrarySelector);

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const dispatch = useDispatch();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(nasaSearchSchema)
  });

  const onSubmit = (data) => {
    if (startDate && endDate && startDate > endDate) {
      return;
    }

    const params = {
      q: data.search,
      media_type: "image",
      page: 1,
      page_size: 12
    };

    if (startDate) {
      params["year_start"] = startDate.getFullYear();
    }

    if (endDate) {
      params["year_end"] = endDate.getFullYear();
    }

    dispatch(nasaLibraryActions.searchNasaLibrary(params));
  };

  const handlePageClick = (event) => {
    const { search } = watch();

    const params = {
      q: search,
      media_type: "image",
      page: event.selected + 1,
      page_size: 12
    };

    if (startDate) {
      params["year_start"] = startDate.getFullYear();
    }

    if (endDate) {
      params["year_end"] = endDate.getFullYear();
    }

    dispatch(nasaLibraryActions.searchNasaLibrary(params));

    window.scrollTo(0, 0);
  };

  return (
    <S.SearchNasaLibraryPageContainer>
      <S.PageHeading>Search Page</S.PageHeading>
      <S.SearchBarWrapper onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Search"
          register={register("search")}
          error={errors.search}
          data-testid="search-input"
        />
        <S.DatePickerWrapper>
          <S.Box>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              dateFormat="yyyy"
              placeholderText="Start year"
              showYearPicker
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              placeholderText="End year"
              dateFormat="yyyy"
              showYearPicker
            />
          </S.Box>
          <S.ErrorMessage>
            {startDate && endDate && startDate > endDate
              ? "Start year cannot be greater than end year."
              : null}
          </S.ErrorMessage>
        </S.DatePickerWrapper>
        <Button
          label="Search"
          loading={getNasaLibraryStatus === LOADING_STATUSES.pending}
        />
      </S.SearchBarWrapper>
      <S.CollectionsItemContainer>
        {nasaLibraryData?.items?.map((item) => (
          <NavLink
            to={`/${item.data[0].nasa_id}`}
            data-testid="colections-item"
            key={item.data[0].nasa_id}
            onClick={() =>
              dispatch(nasaLibraryActions.setNasaLibraryOneData(item))
            }
          >
            <NasaItem item={item} />
          </NavLink>
        ))}
      </S.CollectionsItemContainer>
      <S.PaginationContainer>
        <ReactPaginate
          breakLabel=".."
          nextLabel=" > "
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          activeClassName="active"
          pageCount={
            nasaLibraryData?.metadata?.total_hits
              ? Math.ceil(nasaLibraryData?.metadata.total_hits / 12)
              : 0
          }
          previousLabel=" < "
          renderOnZeroPageCount={null}
        />
      </S.PaginationContainer>
    </S.SearchNasaLibraryPageContainer>
  );
};

export default SearchNasaLibraryPage;
