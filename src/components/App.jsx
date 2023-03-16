import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { DarkModeProvider } from '../context/DarkModeContext';
import React from 'react';
import Navbar from './Navbar/Navbar'
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import Checkout from './Checkout/Checkout';
import Cart from './Cart/Cart';
import { ToastContainer} from 'react-toastify';
import { CarritoProvider } from '../context/CarritoContext';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <CarritoProvider>
            <Navbar nombre={"Lux Autos"}/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                <Route path='/Checkout' element={<Checkout/>}/>
                <Route path='/Cart' element={<Cart/>}/>
              </Routes>
            <ToastContainer/>
          </CarritoProvider>
        </DarkModeProvider>

      </BrowserRouter>

    </>
  );
}

export default App;

