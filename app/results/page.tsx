"use client";
import { useState } from "react";
import { CardsWrapper, Container, InfoWrapper } from "@/app/results/styles";
import { Title } from "@/styles/home-page-styles";
import { useFetchList } from "@/hooks/useFetchList";
import { Card } from "@/components/card";
import { SearchInput } from "@/components/search";
import CircularProgress from "@/components/circular-progress";
import Pagination from "@/components/pagination";

const Results = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const { list, isLoading, isError } = useFetchList(searchQuery, page);

  return (
    <Container>
      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Title>Character list</Title>
      <InfoWrapper>
        <p>count: {list?.info.count}</p>
        <p>pages: {list?.info.pages}</p>
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
