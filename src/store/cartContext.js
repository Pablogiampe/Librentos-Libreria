
import {createContext, useState} from 'react'

export const CartContext = createContext()

function CartProvider({children}) {
  function encontrarItem(id){ return copyCart.findIndex(item => item.id === id)}
  function isInCart(id) {return (copyCart.some(itemInCart => itemInCart.id === id ))}
  const [cart, setCart] = useState([])
  let copyCart = [...cart]
  function addToCart(item, click){
        if ( isInCart(item.id)){ const itemIndex = encontrarItem(item.id)
copyCart[itemIndex].click += click
          setCart(copyCart) 
      } 
      else{ copyCart.push(item)
          setCart(copyCart)
        }
    }

    function removeItem(itemAbuscar){const itemRemove = encontrarItem(itemAbuscar.id)
         copyCart.splice(itemRemove, 1)
        setCart(copyCart)
    }

    function deleteAll(){ copyCart = []
        setCart(copyCart)}


  return (

    
    <CartContext.Provider value={{cart, addToCart, removeItem, deleteAll}}>
        {children}
    </CartContext.Provider>


  )

}

export default CartProvider