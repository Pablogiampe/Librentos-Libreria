import { useContext } from 'react'
import { CartContext } from '../../store/cartContext';
import CartItem from './CartItem';
import {NavLink} from "react-router-dom";

function Cart() {
    const { cart, removeItem, deleteAll } = useContext(CartContext);const total = []
    function removeItemCart(id){removeItem(id) }cart.forEach(function (arrayItem) { var x = arrayItem.price * arrayItem.click; total.push(x);}); const totalFinal = total.reduce((acumulador, b) => acumulador + b, 0)
    
    if (cart.length === 0) { return (
            <div className='no-products'>
                <div>
                <p><h1>Lamentablemente no tiene ningun producto agregado</h1></p>
                <p><NavLink to={`/`} className='boton-no-products'>Inicio para comprar productos</NavLink></p>
                </div>
            </div>
            
            
        )
    } else {
        return (
            <div >
                <div >
                    {cart.map((item) => {
                        return (
                            <CartItem
                            key={item.id + item.name}
                            id={item.id}
                            img={item.pictureUrl}
                            name={item.name}
                            price={item.price}
                            amount={item.click}
                            removeItemCart= {removeItemCart}
                            />
                        )
                    })}
                    
                    <button  className="delete-all" onClick={deleteAll}> Vaciar Carrito </button>
                </div>
            </div>
        )
    }
}

export default Cart 






