"use client";
import { useState } from "react";
import { Container, SearchButton, SearchInput } from "@/app/results/styles";
import { Title } from "@/styles/home-page-styles";
import { useFetchList } from "@/hooks/useFetchList";

const Results = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { list, isLoading, isError } = useFetchList(searchQuery);

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };
  console.log(list?.info);

  return (
    <Container>
      <div>
        <SearchInput
          type="text"
          placeholder="Enter your search query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </div>
      <Title>Character list</Title>
      <div>
        {list?.results.map((char) => <div key={char.id}>{char.name}</div>)}
      </div>
    </Container>
  );
};

export default Results;
