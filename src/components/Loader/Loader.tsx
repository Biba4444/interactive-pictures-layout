import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loaderContainer}>
        <div className={styles.loader}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
