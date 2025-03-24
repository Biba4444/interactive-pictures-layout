import { useState, useEffect, useCallback } from "react";
import SearchBar from "./SearchBar";
import PicturesLayout from "./PicturesLayout";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [pagintationPage, setPagintationPage] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState("idle");

  const url = `https://pixabay.com/api/?key=49508543-beaf05a0f802f0bed2128a61c&q=${searchValue}&orientation=horizontal&page=${pagintationPage}&per_page=15`;

  const fetchImages = useCallback(async () => {
    setStatus("Pending");
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setImages(data.hits);
        setStatus("Resolved");
      } else {
        setStatus("Rejected");
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
      setStatus("Rejected");
    }
    console.log("Images from fetchImages:", images);
  }, [url]);

  useEffect(() => {
    fetchImages();
  }, [searchValue, pagintationPage, fetchImages]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    console.log("Search value from SearchBar:", value);
  };

  const handlePagination = (page: number) => {
    setPagintationPage(page);
    console.log("Page value from Pagination:", page);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {status == "Resolved" && <PicturesLayout images={images} />}
    </>
  );
}

export default App;
