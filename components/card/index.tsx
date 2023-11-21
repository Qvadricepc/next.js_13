import React from "react";
import { Container } from "@/components/card/styles";
import Link from "next/link";
import Image from "next/image";

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
        <Image src={image} alt="character" height={175} width={175} />
        <p>{name}</p>
        <p>{gender}</p>
        <p>{status}</p>
      </Container>
    </Link>
  );
};
