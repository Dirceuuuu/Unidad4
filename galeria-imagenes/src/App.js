// src/App.js
import React from 'react';
import './App.css';
import Galeria from './Galeria'; // Importamos el componente Galeria

function App() {
  return (
    <div className="App">
      <h1>Galería de Imágenes</h1>
      <Galeria /> {/* Mostramos el componente Galeria */}
    </div>
  );
}

export default App;
