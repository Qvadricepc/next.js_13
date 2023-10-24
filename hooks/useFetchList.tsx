import { useEffect, useState } from "react";
interface RickAndMortyCharacter {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Array<{
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
      name: string;
      url: string;
    };
    location: {
      name: string;
      url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
  }>;
}

export const useFetchList = (query: string) => {
  const [list, setList] = useState<RickAndMortyCharacter>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const fetchList = async (search: string) => {
    const apiUrl = "https://rickandmortyapi.com/api/character/?page=1";
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
