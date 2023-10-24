"use client";
import { Body, Button, Title, Wrapper } from "@/styles/home-page-styles";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Body>
      <Wrapper>
        <Title>Rick and Morty Characters</Title>
        <Button onClick={() => router.push("/results")}>Start</Button>
      </Wrapper>
    </Body>
  );
}
