import { useEffect, useState } from "react";
import { RickAndMortyCharacter } from "@/lib/types";

export const useFetchList = (
  query?: string,
  page?: number,
  genderFilter?: string,
) => {
  const [list, setList] = useState<RickAndMortyCharacter>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const fetchList = async () => {
    const baseUrl = "https://rickandmortyapi.com/api/character/";
    const params = new URLSearchParams();

    if (query) params.append("name", query);
    if (page) params.append("page", page.toString());
    if (genderFilter && genderFilter !== "All Genders") {
      params.append("gender", genderFilter);
    }

    const apiUrl = `${baseUrl}?${params.toString()}`;

    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("There is no Data");
        } else {
          throw new Error(`API request failed with status: ${response.status}`);
        }
      }
      const responseJSON = await response.json();
      setList(responseJSON);
    } catch (error) {
      setIsError((error as Error).message || "An unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchList();
  }, [query, page, genderFilter]);

  return { list, isError, isLoading, setIsError };
};
