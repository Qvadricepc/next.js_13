import { Container, IconContainer, Input } from "@/components/search/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import React, { Dispatch, SetStateAction } from "react";

interface ISearch {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export const SearchInput: React.FC<ISearch> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <Container>
      <Input
        type="text"
        placeholder="Enter character name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <IconContainer>
        <FontAwesomeIcon icon={faSearch} />
      </IconContainer>
    </Container>
  );
};
