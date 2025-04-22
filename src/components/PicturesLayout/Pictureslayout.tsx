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
  const uniqueImages = images.filter(
    (image, index, self) => self.findIndex(img => img.id === image.id) === index
  );
  return (
    <div className={styles.grid}>
      {uniqueImages.map((image: Picture) => (
        <div key={image.id} className={styles.card}>
          <img src={image.webformatURL} className={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default PicturesLayout;
