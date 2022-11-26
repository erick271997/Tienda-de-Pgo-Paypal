import React from 'react';

import initialSate from '../initialState';
import Products from '../componets/Products'

const Home = () => {
  return (
    <Products products= {initialSate.products}/>
  );
}

export default Home;