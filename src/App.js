import './App.css';
import { useEffect, useState } from 'react';
import Nav from './component/Home/Nav';
import Home from './component/Home/Home';
// import AOS from "aos";
// import "aos/dist/aos.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);
    return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
     
 
    </div>
  );
}

export default App;
