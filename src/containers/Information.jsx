import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '@styles/Information.css'
import AppContext from '../context/AppContext';

function Information(props) {

    const history = useHistory();

    const { state, addToBuyer } = useContext(AppContext);

    const form = useRef(null)

    const { cart } = state;

    const handleSubmit = () => {
        const formData = new FormData(form.current)
        const buyer = Object.fromEntries(formData);
        console.log('buyer', buyer)
        addToBuyer(buyer);
        history.push('/checkout/payment');
    }

    return (
        <>
            <div className='Information'>
                <div className="Information-content">
                    <div className="Information-head">
                        <h2>Informacion de contacto</h2>
                    </div>
                    <div className="Information-form">
                        <form ref={form}>
                            <input type="text" placeholder='Nombre completo' name="name" />
                            <input type="text" placeholder='Correo electronico' name="email" />
                            <input type="text" placeholder='Direccion' name="address" />
                            <input type="text" placeholder='apto' name="apto" />
                            <input type="text" placeholder='Ciudad' name="country" />
                            <input type="text" placeholder='Estado' name="state" />
                            <input type="text" placeholder='Codigo postal' name="cp" />
                            <input type="text" placeholder='Telefono' name="phone" />
                        </form>
                    </div>
                    <div className="Information-buttons">
                        <div className="Information-back">
                            <Link to="/checkout">
                                Regresar
                            </Link>
                        </div>
                        <div className="Information-next">
                            {/* <Link to="/checkout/payment">
                                Pagar
                            </Link> */}
                            <button type="button" onClick={handleSubmit}>Pagar</button>
                        </div>
                    </div>
                </div>
                <div className="Information-sidebar">
                    <h3>Pedido</h3>
                    {cart.map((item, index) => (
                        <div className="Information-item" key={item.id}>
                            <div className="Information-element">
                                <h4>{item.title}</h4>
                                <span>${item.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Information;