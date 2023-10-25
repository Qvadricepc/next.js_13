import { useEffect, useState } from "react";
import { Character } from "@/lib/types";

export const useGetCharacter = (id: string) => {
  const [user, setUser] = useState<Character>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  const fetchList = async (id: string) => {
    const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

    setIsLoading(true);
    try {
      const response = await fetch(apiUrl);
      const responseJSON = await response.json();
      setUser(responseJSON);
      setIsLoading(false);
    } catch (e: any) {
      setIsError(e.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void fetchList(id);
  }, [id]);

  return { user, isError, isLoading };
};
