import styles from "./Skeleton.module.css";

type SkeletonProps = {
  children?: React.ReactNode;
  onLoading: boolean;
  count?: number;
};

const Skeleton: React.FC<SkeletonProps> = ({
  children,
  onLoading,
  count = 1,
}) => {
  if (onLoading) {
    return (
      <div className={styles.skeletonContainer}>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={styles.skeleton}></div>
        ))}
      </div>
    );
  }
  return <>{children}</>;
};

export default Skeleton;
