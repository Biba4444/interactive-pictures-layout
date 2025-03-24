import styles from "./PicturesLayout.module.css";

type Picture = {
  id: number;
  webformatURL: string;
  tags: string;
};

type PicturesLayoutProps = {
  images: Picture[];
};

const PicturesLayout: React.FC<PicturesLayoutProps> = ({ images }) => {
  return (
    <div className={styles.grid}>
      {images.map(image => (
        <div key={image.id} className={styles.card}>
          <img
            src={image.webformatURL}
            alt={image.tags}
            className={styles.image}
          />
        </div>
      ))}
    </div>
  );
};

export default PicturesLayout;
