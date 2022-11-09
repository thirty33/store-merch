import React, { useContext } from 'react';
import { PayPalScriptProvider, PayPalButtons, BraintreePayPalButtons } from "@paypal/react-paypal-js";
import '@styles/Payment.css'
import AppContext from '../context/AppContext';

function Payment({ history }) {

    const { state, addNewOrder } = useContext(AppContext)
    const { cart, buyer } = state;

    const handleSumTotal = () => {
        const reducer = (accum, current) => accum + current.price;
        return cart.reduce(reducer, 0)
    }

    const handlePaymentSuccess = (data) => {
        console.log('this is data', data)
        if (data.status === 'COMPLETED') {
            const newOrder = {
                buyer,
                products: cart,
                payment: data
            }
            addNewOrder(newOrder)
            history.push('/checkout/success')
        }
    }

    return (
        <div className='Payment'>
            <div className="Payment-content">
                <h3>Resumen del pedido</h3>
                {cart.map(item => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalScriptProvider
                        options={{
                            "client-id": process.env.PAYPAL_CLIENT_ID,
                        }}>

                        <PayPalButtons
                            createOrder={(data, actions) => {
                                return actions.order.create({
                                    purchase_units: [
                                        {
                                            amount: {
                                                value: handleSumTotal(),
                                            },
                                        },
                                    ],
                                });
                            }}
                            onApprove={(data, actions) => {
                                return actions.order.capture().then((details) => {
                                    const name = details.payer.name.given_name;
                                    // alert(`Transaction completed by ${name}`);
                                    handlePaymentSuccess(details);
                                });
                            }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>
        </div>
    );
}

export default Payment;