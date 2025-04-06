import { useState, useEffect, useCallback, createContext } from "react";
import Header from "./components/Header";
import PicturesLayout from "./components/PicturesLayout";
import Skeleton from "./components/Skeleton";
import Pagination from "./components/Pagination";

type Image = {
  id: number;
  webformatURL: string;
  tags: string;
};

export const SearchContext = createContext<(value: string) => void>(() => {});

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [pagintationPage, setPagintationPage] = useState(1);
  const [images, setImages] = useState<Image[]>([]);
  const [status, setStatus] = useState<
    "idle" | "Pending" | "Resolved" | "Rejected"
  >("idle");

  const url = `https://pixabay.com/api/?key=49508543-beaf05a0f802f0bed2128a61c&q=${searchValue}&orientation=horizontal&page=${pagintationPage}&per_page=15`;

  const fetchImages = useCallback(async () => {
    setStatus("Pending");
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setImages(prevImages =>
          pagintationPage === 1 ? data.hits : [...prevImages, ...data.hits]
        );
        setStatus("Resolved");
      } else {
        setStatus("Rejected");
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching images:", error);
      setStatus("Rejected");
    }
  }, [url, pagintationPage]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    setPagintationPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPagintationPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <SearchContext.Provider value={handleSearch}>
        <Header />
      </SearchContext.Provider>
      <Skeleton onLoading={status === "Pending"} count={images.length + 16}>
        <PicturesLayout images={images} />
      </Skeleton>
      {status !== "Pending" && <Pagination onLoadMore={handleLoadMore} />}
    </>
  );
}

export default App;
