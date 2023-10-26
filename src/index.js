import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';
import Detail from './Detail'
import Sortdata from './Sortdata'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Product/detail/:id' element={<Detail />} />
        <Route path='/Product/:name' element={<Sortdata />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
