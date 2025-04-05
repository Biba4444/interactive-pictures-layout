import SearchBar from "./SearchBar";
import ThemeChanger from "./ThemeChanger";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <SearchBar />
      <ThemeChanger />
    </div>
  );
};

export default Header;
