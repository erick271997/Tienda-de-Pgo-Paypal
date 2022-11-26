import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../componets/Layout';
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
      <Routes>
        <Route  path="/" element={<Home/>} ></Route>
        <Route  path="/checkout" element={<Checkout/>} ></Route>
        <Route  path="/checkout/information" element={<Information/>} ></Route>
        <Route path="/checkout/payment" element={<Payment/>} ></Route>
        <Route  path="/checkout/success" element={<Success/>} ></Route>
        <Route component={<NotFound/>} ></Route>
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;