"use client";
import { useState } from "react";
import {
  CardsWrapper,
  Container,
  SearchButton,
  SearchInput,
} from "@/app/results/styles";
import { Title } from "@/styles/home-page-styles";
import { useFetchList } from "@/hooks/useFetchList";
import { Card } from "@/components/card";

const Results = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const { list, isLoading, isError } = useFetchList(searchQuery, page);

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <Container>
      <div>
        <SearchInput
          type="text"
          placeholder="Enter character name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </div>
      <Title>Character list</Title>
      <CardsWrapper>
        {list?.results.map((char) => (
          <Card
            key={char.id}
            name={char.name}
            image={char.image}
            status={char.status}
            gender={char.gender}
            id={char.id}
          />
        ))}
      </CardsWrapper>
    </Container>
  );
};

export default Results;
