import { useEffect, useState } from "react";
import { RickAndMortyCharacter } from "@/lib/types";

export const useFetchList = (query?: string, page?: number) => {
  const [list, setList] = useState<RickAndMortyCharacter>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const fetchList = async (search?: string, page?: number) => {
    const apiUrl = search
      ? `https://rickandmortyapi.com/api/character/?name=${search}`
      : `https://rickandmortyapi.com/api/character/?page=${page}`;
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const responseJSON = await response.json();
      setList(responseJSON);
      setIsLoading(false);
    } catch (e: any) {
      setIsError(e.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void fetchList(query);
  }, [query]);

  return { list, isError, isLoading };
};
