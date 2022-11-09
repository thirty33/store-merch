import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '@styles/Layout.css';

function Layout({children}) {
    return (
        <div className='Main'>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
}

export default Layout;