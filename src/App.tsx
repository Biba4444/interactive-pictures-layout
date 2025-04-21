import Header from "./components/Header";
import PicturesLayout from "./components/PicturesLayout";
import Skeleton from "./components/Skeleton";
import { SearchContext } from "./contexts/useSearchContext";
import { useImages } from "./hooks/useImages";

function App() {
  const { images, status, handleSearch } = useImages();

  return (
    <>
      <SearchContext value={{ onSearch: handleSearch }}>
        <Header />
      </SearchContext>
      <Skeleton onLoading={status === "pending"} count={images.length + 21}>
        <PicturesLayout images={images} />
      </Skeleton>
    </>
  );
}

export default App;
