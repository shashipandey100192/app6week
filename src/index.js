import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./pages/style.css";
// import One,{Mypage1,Mypage3} from './pages/Mypage';
// import About from './pages/About';
import Userlogin from './modules/users/auth/Userlogin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userregistor from './modules/users/auth/Userregistor';
import Userlandingpage from './modules/users/dashboard/Userlandingpage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Userlogin/>}></Route>
        <Route path='registor' element={<Userregistor/>}></Route>
        <Route path='landing' element={<Userlandingpage/>}></Route>

      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

