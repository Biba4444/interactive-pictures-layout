import { useState } from "react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  onSearch: (value: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSubmit = () => {
    onSearch(searchValue);
    setSearchValue("");
  };

  return (
    <div className={styles.header}>
      <input
        type="text"
        name="Searchbar"
        value={searchValue}
        placeholder="Search..."
        onChange={handleSearch}
        className={styles.input}
      />
      <button onClick={handleSubmit} className={styles.button}>
        Submit
      </button>
    </div>
  );
};

export default SearchBar;
