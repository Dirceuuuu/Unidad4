// src/components/ImageCard.js
import React from 'react';

const ImageCard = ({ src, alt, title }) => {
  return (
    <div className="image-card">
      <img src={src} alt={alt} />
      <h3>{title}</h3>
    </div>
  );
};

export default ImageCard;
