"use client";
import React from "react";
import { useGetCharacter } from "@/hooks/useGetCharacter";

const Character = ({ params }: { params: { characterId: string } }) => {
  const { user, isLoading, isError } = useGetCharacter(params.characterId);

  console.log(user);

  return <div>Hello</div>;
};

export default Character;
