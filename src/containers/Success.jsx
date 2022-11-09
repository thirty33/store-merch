import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Maps from '../components/Maps';
import { useGoogleAddress } from '../hooks/useGoogleAddress';
import '@styles/Success.css'

function Success(props) {

    const {state} = useContext(AppContext)
    const { buyer } = state;

    const { map: address } = useGoogleAddress(buyer.address)

    console.log('buyer', buyer)

    return (
        <div className='Success'>
            <div className="Success-content">
                <h2>{buyer.name}, Gracias por tu compra</h2>
                <span>Tu pedido llegara en tres dias a tu direccion</span>
                <div className="Success-map">
                    <Maps data={address}/>
                </div>
            </div>
        </div>
    );
}

export default Success;