/** Libraries */
import React from 'react';

/** Components */
import ImageItem from '../image-item';

/** Styles */
import './image-list.styles.css';

const ImageList = ({ images }) => {
  console.log(images);
  return (
    <div className="image-list">
      {images.map((image) => (
        <ImageItem key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
