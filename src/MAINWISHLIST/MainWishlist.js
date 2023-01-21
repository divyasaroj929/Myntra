import React, { useState } from "react";
import PropDiv from "../PROFLIENAVBARII/PropDiv";
import { useNavigate } from "react-router-dom";

import "./index.css";
import PropinputBtn from "../MAINWISHLIST/PropBtnInput";
import Closet from "../MAINWISHLIST/Closet.svg";

const MainWishlist = () => {
  const navigate = useNavigate();

  const turnProfile = () => {
    navigate("/profile");
  };

  const a = "";

  console.log("kguibl");
  return (
    <>
      <div className="Wishlist">
        <div className="top-head"></div>
        <div className="center-div-wishlist">
          <PropDiv
            className="h1-header"
            value={[<h1 key={a}>please log in</h1>]}
          />
          <PropDiv
            className="p1-para"
            value="Login to view items in your wishlist"
          />
          <div className="svg-img">
            <img src={Closet} className="img" />
          </div>
          <PropinputBtn
            type="button"
            className="login-wishlist"
            value={"login"}
            onClick={turnProfile}
          />
        </div>
      </div>
    </>
  );
};

export default MainWishlist;
