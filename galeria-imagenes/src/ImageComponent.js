import React from 'react';

function ImageComponent({ src, alt }) {
  return (
    <div className="image-container">
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
    </div>
  );
}

export default ImageComponent;
