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
    <div>
      {images.map(image => (
        <div key={image.id}>
          <img src={image.webformatURL} alt={image.tags} />
        </div>
      ))}
    </div>
  );
};

export default PicturesLayout;
