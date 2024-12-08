// src/Galeria.js
import React, { useState } from 'react';
import './Galeria.css';  // Si quieres agregar estilo específico para Galeria

const Galeria = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Lista de imágenes
  const images = [
    {
      src: 'https://i.pinimg.com/736x/27/f5/74/27f574f7cc9ab0d74026250d981bbc12.jpg',
      alt: 'Venadito',
      title: 'Venado virtual',
    },
    {
      src: 'https://i.pinimg.com/736x/ad/8e/46/ad8e4633f1591cc3c6bfaa2270b4ec85.jpg',
      alt: 'Leyenda del oeste',
      title: 'Red Dead Redemption 2. Arthur',
    },
    {
      src: 'https://i.pinimg.com/736x/fb/b6/e2/fbb6e26f319ffd50ef61f7aa1d7740aa.jpg',
      alt: 'Meme de perritos',
      title: 'Perros Redemption',
    },
    {
      src: 'https://i.pinimg.com/736x/d9/83/ba/d983baf4e9b84d379802d095d782ded5.jpg',
      alt: 'Dark Souls Siff',
      title: 'Siff dog',
    },
  ];

  // Función para ir a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para ir a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    );
  };

  return (
    <div className="galeria">
      <div className="image-card">
        <img
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
        />
        <h3>{images[currentImageIndex].title}</h3>
      </div>
      <div className="navigation">
        <button onClick={prevImage}>Anterior</button>
        <button onClick={nextImage}>Siguiente</button>
      </div>
    </div>
  );
};

export default Galeria;
