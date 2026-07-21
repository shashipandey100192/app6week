import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./css/global.css";
import Userlogin from './modules/users/auth/Userlogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userregistor from './modules/users/auth/Userregistor';
import Userlandingpage from './modules/users/dashboard/Userlandingpage';
import Usermainpage from './modules/users/dashboard/Usermainpage';
import Userlistpage from './modules/users/dashboard/Userlistpage';
import Errorpage from './modules/users/sharescomponents/Errorpage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Userlogin/>}></Route>
        <Route path='registor' element={<Userregistor/>}></Route>
        <Route path='landing' element={<Userlandingpage/>}>
          <Route path='' element={<Usermainpage/>}></Route>
          <Route path='users' element={<Userlistpage/>}></Route> 
          <Route path='*' element={<Errorpage/>}></Route>
        
        </Route>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

