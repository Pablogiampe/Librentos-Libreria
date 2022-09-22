import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import Navbar from './components/NavBar/Navbar.js';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartProvider from './store/cartContext';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';


function App() {
  return (
    
    <div className="page-container">
    <div className="content-wrap">
    

    <BrowserRouter>
      <CartProvider>
        <Navbar />
      
          <Routes>
            

            <Route path="/" element ={<ItemListContainer greeting="Productos en descuento" />} />
            <Route path="/item/:id" element ={<ItemDetailContainer />} />
            <Route path="/category/:id" element ={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element ="No hay ninguna pagina :c" />
          <Route path='/Gracias' element={<div><h1 className='text-center'>Gracias por tu compra</h1><button className='Boton' onClick={() => window.location.reload(false)}>Finalizar</button></div>}/>
          </Routes>
      </CartProvider>
    </BrowserRouter>
    </div>
    <Footer/>
    </div>
    

  
  );
}

export default App;

