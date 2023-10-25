import React from "react";
import { Container } from "@/components/styles";
import Link from "next/link";

interface ICard {
  name: string;
  image: string;
  gender: string;
  status: string;
  id: number;
}

export const Card: React.FC<ICard> = ({ name, image, gender, status, id }) => {
  return (
    <Link href={`/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <Container>
        <img src={image} alt="character" />
        <p>{name}</p>
        <p>{gender}</p>
        <p>{status}</p>
      </Container>
    </Link>
  );
};
