"use client";
import { Body, Button, Title, Wrapper } from "@/styles/home-page-styles";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Body>
      <Wrapper>
        <Title>Github repository search</Title>
        <Button onClick={() => router.push("/search")}>Start</Button>
      </Wrapper>
    </Body>
  );
}
