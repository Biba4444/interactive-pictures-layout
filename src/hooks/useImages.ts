import { useCallback, useEffect, useState } from "react";
import { useInfinityScroll } from "./useInfinityScroll";

const API_URL = "https://pixabay.com/api/";
const API_KEY = "49508543-beaf05a0f802f0bed2128a61c";

type Image = {
  id: number;
  webformatURL: string;
  tags: string;
};

type Status = "idle" | "pending" | "resolved" | "rejected";

export const useImages = () => {
  const [searchValue, setSearchValue] = useState("");
  const [images, setImages] = useState<Image[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const { actualPaginationPage, setActualPaginationPage } = useInfinityScroll();

  const fetchImages = useCallback(
    async (fetchUrl: string) => {
      setStatus("pending");
      try {
        const response = await fetch(fetchUrl);
        if (response.ok) {
          const data = await response.json();
          setImages(prevImages =>
            actualPaginationPage === 1
              ? data.hits
              : [...prevImages, ...data.hits]
          );
          setStatus("resolved");
        } else {
          setStatus("rejected");
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching images:", error);
        setStatus("rejected");
      }
    },
    [actualPaginationPage]
  );

  useEffect(() => {
    const url = `${API_URL}?key=${API_KEY}&q=${searchValue}&orientation=horizontal&page=${actualPaginationPage}&per_page=20`;
    fetchImages(url);
  }, [searchValue, actualPaginationPage, fetchImages]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setActualPaginationPage(1);
    setImages([]);
  };

  return {
    images,
    status,
    handleSearch,
  };
};
