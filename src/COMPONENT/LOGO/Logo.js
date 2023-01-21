import React, { useState } from "react";
import "./index.css";
import Picture from "../MLOGO/Picture.jpg";

const Logo = () => {
  return (
    <>
      <div className="app-logo">
        <img src={Picture} alt="" className="img1" />
      </div>
    </>
  );
};

export default Logo;
