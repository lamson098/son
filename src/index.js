import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import './style.css'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Product from './Product';
import Soilfertilizers from './Soilfertilizers'
import Pesticides from './Pesticides'
import Seeds from './Seeds'
import Pots from './Pots'
import Potplates from './Potplates'
import Wallmounted from './Wallmounted'
import Wallhangingbracket from './Wallhangingbracket'
import Pothangers from './Pothangers'
import Railingbrackets from './Railingbrackets'
import Miniature from './Miniature'
import Accessories from './Accessories'
import Decorative from './Decorative'
import Detail from './Detail'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Product/Soilfertilizers' element={<Soilfertilizers />} />
        <Route path='/Product/Pesticides' element={<Pesticides />} />
        <Route path='/Product/Seeds' element={<Seeds />} />
        <Route path='/Product/Pots' element={<Pots />} />
        <Route path='/Product/Potplates' element={<Potplates />} />
        <Route path='/Product/Wallmounted' element={<Wallmounted />} />
        <Route path='/Product/Wallhangingbracket' element={<Wallhangingbracket />} />
        <Route path='/Product/Pothangers' element={<Pothangers />} />
        <Route path='/Product/Railingbrackets' element={<Railingbrackets />} />
        <Route path='/Product/Miniature' element={<Miniature />} />
        <Route path='/Product/Accessories' element={<Accessories />} />
        <Route path='/Product/Decorative' element={<Decorative />} />
        <Route path='/Product/:id' element={<Detail />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
