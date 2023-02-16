import './App.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import React from 'react';
import Navbar from './Navbar/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar nombre={"Lux Autos"}/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;

