import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '@styles/Checkout.css'
import AppContext from '../context/AppContext';

function Checkout(props) {

    const { state, removeFromCart } = useContext(AppContext)
    const { cart } = state;

    const handleRemove = (payload) => removeFromCart(payload)

    const handleSumTotal = () => {
        const reducer = (accum, current) => accum + current.price;
        return cart.reduce(reducer, 0)
    }

    return (
        <div className='Checkout'>
            <div className="Checlout-content">
                {cart.length > 0 ? (<h3>Lista de Pedidos:</h3>) : (<h3>Sin Pedidos:</h3>)}
                {cart.map((item) => (
                    <div className="Checkout-item" key={item.title}>
                        <div className="Cheockut-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                        <button type="button" onClick={() => handleRemove(item)}>
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="Checkout-sidebar">
                    <h3>Precio total: ${handleSumTotal()}</h3>
                    <Link to="/checkout/information">
                        <button type="button">Continuar pedido</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Checkout;