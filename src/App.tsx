import Header from "./components/Header";
import PicturesLayout from "./components/PicturesLayout";
// import Skeleton from "./components/Skeleton";
import Loader from "./components/Loader";
import styles from "./App.module.css";
import { SearchContext } from "./contexts/useSearchContext";
import { useImages } from "./hooks/useImages";

function App() {
  const { images, status, handleSearch } = useImages();
  console.log("Current status:", status);

  return (
    <>
      <SearchContext value={{ onSearch: handleSearch }}>
        <Header />
      </SearchContext>
      {/* <Skeleton onLoading={status === "pending"} count={images.length + 21}> */}
      <PicturesLayout images={images} />
      {/* </Skeleton> */}
      {status === "pending" && <Loader />}
      {status == "rejected" && (
        <div className={styles.message}>No images found.</div>
      )}
    </>
  );
}

export default App;
