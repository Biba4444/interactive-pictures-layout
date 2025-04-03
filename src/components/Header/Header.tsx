import SearchBar from "./SearchBar";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <SearchBar />
    </div>
  );
};

export default Header;
