import './App.css';

import React from 'react';
import Navbar from './Navbar/Navbar'
import ItemListContainer from '../ItemListContainer/ItemListContainer.jsx';

const App = () => {
  return (
    <>
      <Navbar nombre={"Lux Autos"}/>
      <ItemListContainer greeting={"Bienvenido a Lux Autos"}/>
    </>
  );
}

export default App;

