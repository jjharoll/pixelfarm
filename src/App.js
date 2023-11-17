// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import BeverageComponent from './components/BeverageComponent';
import CeramicistComponent from './components/CeramicistComponent';
import CookingComponent from './components/CookingComponent';
import GrangerComponent from './components/GrangerComponent';
import GrillingComponent from './components/GrillingComponent';
import TextilerComponent from './components/TextilerComponent';
import WoodworkingComponent from './components/WoodworkingComponent';
import FarmingComponent from './components/FarmingComponent';

import './components/pixelEffect.css'; // Importa el archivo de estilo para el efecto de píxeles

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    /* Agrega cualquier estilo global que desees, como fondos, colores, etc. */
  }
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beverage" element={<BeverageComponent />} />
        <Route path="/farming" element={<FarmingComponent />} />
        <Route path="/ceramicist" element={<CeramicistComponent />} />
        <Route path="/cooking" element={<CookingComponent />} />
        <Route path="/granger" element={<GrangerComponent />} />
        <Route path="/grilling" element={<GrillingComponent />} />
        <Route path="/textiler" element={<TextilerComponent />} />
        <Route path="/woodworking" element={<WoodworkingComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
