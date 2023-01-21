import React from "react";

import Navbar from "./NAVLINKPAGE/Navbar";

import Logo from "../../LOGO/Logo";

import Search from "../../SEARCH/Search";

import NavII from "../../NAVTWO/NavII";

import "../../../StyleComponent/Header.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

// import Logo from "../COMPONENT/LOGO/Logo";
import PropDiv from "../../../PROFLIENAVBARII/PropDiv";
import { useLocation } from "react-router-dom";

const NavRouterPage = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {path == "/Bag" ? (
        <div className=" bag-top-head">
          <Logo />
          <PropDiv
            className="three-stage-of-buy"
            value={[
              <span>BAG</span>,
              <span>.......ADDRESS</span>,
              <span>........PAYMENT</span>,
            ]}
          />
          <PropDiv
            className="SECURE"
            value={[
              <BsFillPatchCheckFill className="right-tick" />,
              <span>100% secure</span>,
            ]}
          />
        </div>
      ) : (
        <div className="top-header">
          <Logo />
          <Navbar />
          <Search />
          <NavII />
        </div>
      )}
      {/* // <div className="top-header">
      //   <Logo />
      //   <Navbar />
      //   <Search />
      //   <NavII />
      // </div> */}
    </>
  );
};

export default NavRouterPage;
