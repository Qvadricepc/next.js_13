"use client";
import React from "react";
import { useGetCharacter } from "@/hooks/useGetCharacter";
import {
  BackButton,
  CharacterContainer,
  CharacterDetailItem,
  CharacterDetails,
  CharacterInfo,
  CharacterName,
  CharacterStatus,
  ImageContainer,
} from "./styles";
import CircularProgress from "@/components/circular-progress";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Character = ({ params }: { params: { characterId: string } }) => {
  const { user, isLoading, isError } = useGetCharacter(params.characterId);
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  if (user) {
    const { name, status, species, gender, origin, location, image, episode } =
      user;

    return (
      <CharacterContainer>
        <BackButton onClick={handleBack}>Go Back</BackButton>
        {isError ? (
          <p>{isError}</p>
        ) : isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <ImageContainer>
              <Image
                src={image}
                alt={name}
                width={500}
                height={500}
                layout="responsive"
              />
            </ImageContainer>
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
                <CharacterDetailItem>Episodes:</CharacterDetailItem>
                {episode.map((every) => (
                  <CharacterDetailItem key={every}>{every}</CharacterDetailItem>
                ))}
              </CharacterDetails>
            </CharacterInfo>
          </>
        )}
      </CharacterContainer>
    );
  }
};

export default Character;
