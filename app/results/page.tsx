"use client";
import React, { useState } from "react";
import {
  CardsWrapper,
  Container,
  HeaderWrapper,
  InfoWrapper,
} from "@/app/results/styles";
import { Title } from "@/styles/home-page-styles";
import { useFetchList } from "@/hooks/useFetchList";
import { Card } from "@/components/card";
import { SearchInput } from "@/components/search";
import CircularProgress from "@/components/circular-progress";
import Pagination from "@/components/pagination";
import CustomSelect from "@/components/select";

const Results = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [page, setPage] = useState(1);
  const { list, isLoading, isError, setIsError } = useFetchList(
    searchQuery,
    page,
    genderFilter,
  );

  const handleGenderFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setPage(1);
    setGenderFilter(e.target.value);
    setIsError("");
  };

  return (
    <Container>
      <HeaderWrapper>
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setError={setIsError}
        />
        <CustomSelect
          filter={genderFilter}
          handleFilter={handleGenderFilterChange}
          options={["All Genders", "Male", "Female"]}
        />
      </HeaderWrapper>

      <Title>Character list</Title>
      <InfoWrapper>
        <p>count: {isError ? 0 : list?.info.count}</p>
        <p>pages: {isError ? 0 : list?.info.pages}</p>
      </InfoWrapper>

      <CardsWrapper>
        {isError ? (
          <p>{isError}</p>
        ) : isLoading ? (
          <CircularProgress />
        ) : (
          list?.results?.map((char) => (
            <Card
              key={char.id}
              name={char.name}
              image={char.image}
              status={char.status}
              gender={char.gender}
              id={char.id}
            />
          ))
        )}
      </CardsWrapper>
      <Pagination
        currentPage={page}
        onPageChange={setPage}
        totalPages={list?.info.pages}
      />
    </Container>
  );
};

export default Results;
