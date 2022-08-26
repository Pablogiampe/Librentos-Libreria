import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Navbar from './components/NavBar/Navbar.js';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartProvider from './store/cartContext';
import Cart from './components/Cart/Cart';


function App() {
  return (
    
    <>
    

    <BrowserRouter>
      <CartProvider>
        <Navbar />
          <Routes>
            

            <Route path="/" element ={<ItemListContainer greeting="Productos en descuento" />} />
            <Route path="/item/:id" element ={<ItemDetailContainer />} />
            <Route path="/category/:id" element ={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element ="No hay ninguna pagina :c" />
          </Routes>
      </CartProvider>
    </BrowserRouter>

    
    
    </>

  
  );
}

export default App;

