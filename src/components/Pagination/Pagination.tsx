import styles from "./Pagination.module.css";

type PaginationProps = {
  onLoadMore: () => void;
};

const Pagination: React.FC<PaginationProps> = ({ onLoadMore }) => {
  return (
    <div className={styles.pagination}>
      <button onClick={onLoadMore} className={styles.button}>
        Load more
      </button>
    </div>
  );
};

export default Pagination;
