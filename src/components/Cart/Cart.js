import { useContext } from 'react'
import { CartContext } from '../../store/cartContext';
import CartItem from './CartItem';
import {NavLink} from "react-router-dom";
import UserForm from '../UserForm/UserForm';

function Cart() {
    const { cart, removeItem, deleteAll } = useContext(CartContext);const total = []
    function removeItemCart(id){removeItem(id) }cart.forEach(function (arrayItem) { var x = arrayItem.price * arrayItem.click; total.push(x);}); const totalFinal = total.reduce((acumulador, b) => acumulador + b, 0)
    
    if (cart.length === 0) { return (
            <div className='no-products'>
                <div>
                <h1>No Agrego ningun producto al carrito</h1>
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
                    <div className='Final'>
                    <button  className="delete-all" onClick={deleteAll}> Vaciar Carrito </button><p className='ms-5'> Precio final: ${totalFinal}</p></div>
              
                </div>
                <div className='cards'>
                    <div className='forms'>
                    <UserForm cart={cart} total={totalFinal}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart 






