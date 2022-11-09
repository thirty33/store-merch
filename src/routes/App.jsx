import React from 'react';
import { HashRouter, Switch, Router, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Information from '../containers/Information';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
const App = () => {
  
  const initialState = useInitialState();

  return (
    <>
      <AppContext.Provider value={initialState}>
        <HashRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/checkout/information" component={Information} />
              <Route exact path="/checkout/payment" component={Payment} />
              <Route exact path="/checkout/success" component={Success} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </Layout>
        </HashRouter>
      </AppContext.Provider>
    </>
  )
};

export { App };
