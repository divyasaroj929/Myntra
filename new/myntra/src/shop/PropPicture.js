import React from "react";

import Tops from "../MAIN/ImageSection/Tops.jpg";

import { SlHeart } from "react-icons/sl";

import { useNavigate } from "react-router-dom";

const PropPicture = (props) => {
  const navigate = useNavigate();

  const turnProfile = () => {
    navigate("/Profile");
  };
  return (
    <>
      <div className="Cards">
        <div className="cards-img-container">
          <img src={Tops} alt="" className="Tops" />
        </div>
        <div className="img-info">
          <div className="img-first-name">
            <h1>{props.name}</h1>
          </div>
          <div className="hidden-wishlist">
            <div className="wishlist-container" onClick={turnProfile}>
              <SlHeart style={{ marginRight: "20px" }} />
              Wishlist
            </div>
            <div className="size-chart">
              <div className="size">{props.size}</div>
            </div>
          </div>
          <div className="img-second-row-info">
            <p> {props.para}</p>
            <div className="price-info">{props.price}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropPicture;
