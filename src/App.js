import React from "react";

import "./StyleComponent/Header.css";

import "./StyleComponent/mediaQdropdown.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./COMPONENT/NAVFIRST/NAVROUTERPAGE/NAVLINKPAGE/Home";

import Kids from "./COMPONENT/NAVFIRST/NAVROUTERPAGE/NAVLINKPAGE/Kids";

import Beauty from "./COMPONENT/NAVFIRST/NAVROUTERPAGE/NAVLINKPAGE/Beauty";

import Man from "./COMPONENT/NAVFIRST/NAVROUTERPAGE/NAVLINKPAGE/Man";

import Women from "./COMPONENT/NAVFIRST/NAVROUTERPAGE/NAVLINKPAGE/Women";

import Studio from "./COMPONENT/NAVFIRST/NAVROUTERPAGE/NAVLINKPAGE/Studio";

import HOMELiving from "./COMPONENT/NAVFIRST/NAVROUTERPAGE/NAVLINKPAGE/HOMELiving";

import Proflie from "./COMPONENT/NAVTWO/Profile";

import Wishlist from "./COMPONENT/NAVTWO/Wishlist";

import Bag from "./COMPONENT/NAVTWO/Bag";

import "./App.css";

import NavRouterPage from "./COMPONENT/NAVFIRST/NAVROUTERPAGE/NavRouterPage";

import Rightsidebar from "./Rightsidebar";
import Footer from "./FOOTER/Footer/Footer";
function App() {
  let num1 = 5;
  let num2 = 8;
  let total = num1 + num2;
  console.log(total);

  return (
    <>
      <div className="main-head-container">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <NavRouterPage />
          <Routes>
            <Route path="/" element={<Home />}></Route>

            {/* <Route index element={<Home />}></Route> */}
            <Route path="/Man" element={<Man />}></Route>
            <Route path="/Woman" element={<Women />}></Route>
            <Route path="/Kids" element={<Kids />}></Route>
            <Route path="/HOMELiving" element={<HOMELiving />}></Route>
            <Route path="/Studio" element={<Studio />}></Route>
            <Route path="/Beauty" element={<Beauty />}></Route>
            {/* nav2 ul list */}
            <Route path="/Profile" element={<Proflie />}></Route>
            <Route path="/Bag" element={<Bag />}></Route>
            <Route path="/Wishlist" element={<Wishlist />}></Route>
            <Route path="/order"></Route>
          </Routes>
          <Rightsidebar />
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
