import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App';
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Home } from './screens/home/Home';
import { Orders } from './screens/orders/Orders';
import { Clients } from './screens/users/Clients';
import { Products } from './screens/products/Products';





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <BrowserRouter>
      <Routes>
         <Route path='/' element= {<App />} >
            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='orders' element={<Orders />} />
            <Route path='products' element={<Products />} />
            <Route path='clients' element={<Clients />} />
         </Route>
      </Routes>
   </BrowserRouter>

)