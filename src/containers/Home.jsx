import React from 'react';
import initialState from '../initialState';
import Products from '../components/Products';

function Home(props) {
    return (
        <>
            <Products products={initialState.products}></Products>
        </>
    );
}

export default Home;