import { useContext, useState,createContext } from "react";
const cartContext = createContext();

export const useCartContext=()=> useContext(cartContext);


export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addProduct=(item,newQuantity)=>{
    const{quantity=0}=cart.find(prod=>prod.item.id === item.id)||{};
    const newcart=cart.filter(prod=>prod.item.id!== item.id);
    setCart([... newcart,{... item,quantity:quantity+newQuantity}])

}


console.log('carrito:', cart )

const clearCart = () => setCart([]);
const isInCart = (id) => { return cart.find(producto=> producto.id === id)};
const removeProduct =(id) => setCart(cart.filter(product=> product.id !==id))
 



return (
    <cartContext.Provider value={{ clearCart, isInCart, removeProduct,addProduct}}>
      {children}
    </cartContext.Provider>
  );
}
