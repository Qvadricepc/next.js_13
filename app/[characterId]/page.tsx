"use client";
import React from "react";
import { useGetCharacter } from "@/hooks/useGetCharacter";
import {
  CharacterContainer,
  CharacterDetailItem,
  CharacterDetails,
  CharacterImage,
  CharacterInfo,
  CharacterName,
  CharacterStatus,
} from "@/components/card/styles";
import CircularProgress from "@/components/circular-progress";

const Character = ({ params }: { params: { characterId: string } }) => {
  const { user, isLoading, isError } = useGetCharacter(params.characterId);

  if (user) {
    const { name, status, species, gender, origin, location, image, episode } =
      user;

    return (
      <CharacterContainer>
        {isError ? (
          <p>{isError}</p>
        ) : isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <CharacterImage src={image} alt={name} />
            <CharacterInfo>
              <CharacterName>{name}</CharacterName>
              <CharacterStatus status={status}>{status}</CharacterStatus>
              <CharacterDetails>
                <CharacterDetailItem>Species: {species}</CharacterDetailItem>
                <CharacterDetailItem>Gender: {gender}</CharacterDetailItem>
                <CharacterDetailItem>Origin: {origin.name}</CharacterDetailItem>
                <CharacterDetailItem>
                  Location: {location.name}
                </CharacterDetailItem>
              </CharacterDetails>
            </CharacterInfo>
          </>
        )}
      </CharacterContainer>
    );
  }
};

export default Character;
