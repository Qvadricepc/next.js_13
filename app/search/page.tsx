"use client";
import { useState } from "react";
import { Container, SearchButton, SearchInput } from "@/app/search/styles";
import { Title } from "@/styles/home-page-styles";
import { useSearch } from "@/hooks/useSearch";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, loading, error } = useSearch(searchQuery);

  const handleSearch = () => {
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <Container>
      <Title>Search Page</Title>
      <div>
        <SearchInput
          type="text"
          placeholder="Enter your search query"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </div>
    </Container>
  );
};

export default Search;
