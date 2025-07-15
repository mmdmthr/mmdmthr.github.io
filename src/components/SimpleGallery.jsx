import { MasonryPhotoAlbum } from 'react-photo-album';
import "react-photo-album/masonry.css";

const SimpleGallery = ({ photos }) => {
  return <MasonryPhotoAlbum photos={photos} />;
};

export default SimpleGallery;
