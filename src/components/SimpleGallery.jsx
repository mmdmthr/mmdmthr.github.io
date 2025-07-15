import { useState } from 'react';
import { MasonryPhotoAlbum } from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import "react-photo-album/masonry.css";
import "yet-another-react-lightbox/styles.css";

const SimpleGallery = ({ photos }) => {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <MasonryPhotoAlbum
        photos={photos}
        onClick={({ index: current }) => setIndex(current)}
      />

      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos}
      />
    </>
  );
};

export default SimpleGallery;
