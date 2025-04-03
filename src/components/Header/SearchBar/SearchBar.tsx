import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "../../../App";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const onSearch = useContext(SearchContext);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSubmit = (event: React.SyntheticEvent<EventTarget>) => {
    event.preventDefault();
    onSearch(searchValue);
    setSearchValue("");
  };

  return (
    <div className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label>
          <input
            type="text"
            name="Searchbar"
            value={searchValue}
            placeholder="Search..."
            onChange={handleSearch}
            className={styles.input}
          />
          <FaSearch className={styles.search} />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
