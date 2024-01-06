import React from "react";

import fiveimg from "../ImageSection/fiveimg.jpg";

import firstmyntra from "../ImageSection/firstmyntra.jpg";

import secondimg from "../ImageSection/secondimg.jpg";

import thirdImg from "../ImageSection/thirdImg.jpg";

import fourimg from "../ImageSection/fourimg.jpg";

import Shopnow from "../Section-4/Shopnow";

import six from "../ImageSection/six.jpg";

import summer from "../ImageSection/summer.jpg";

import PropHomeImg from "./PropHomeImg";

import ShortImgProp from "./ShortImgProp";

import { useNavigate } from "react-router-dom";

const shortData = [
  {
    img: secondimg,
  },
  {
    img: six,
  },
  {
    img: secondimg,
  },
  {
    img: secondimg,
  },
  {
    img: secondimg,
  },
  {
    img: secondimg,
  },
  {
    img: secondimg,
  },
  {
    img: secondimg,
  },
  {
    img: secondimg,
  },
  {
    img: secondimg,
  },
  {
    img: secondimg,
  },
  {
    img: secondimg,
  },
];

const CreateMainPage = () => {
  const navigate = useNavigate();
  const turnMen = () => {
    navigate("/Man");
  };
  const turnWomen = () => {
    navigate("/Woman");
  };
  const turnWishlist = () => {
    navigate("/Wishlist");
  };

  console.log("men");
  return (
    <>
      <div className="main-img">
        <img src={firstmyntra} alt="img2" className="main-img-container" />
        <Shopnow name="for him" className="button-section1" onClick={turnMen} />
        <Shopnow
          name="for her"
          className="button-section2"
          onClick={turnWomen}
        />
        <div className="offer-section">
          <div className="offer-img">
            <img src={six} alt="img3" className="stecker" />
          </div>
          <p>Jaw-Droping Prices This Way</p>
          <Shopnow
            name="shop now"
            className="button-section"
            onClick={turnWishlist}
          />
        </div>
      </div>
      <div className="row-column-multi-img">
        <div
          className="multi-img"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {shortData.map((value) => {
            return <img src={value.img} alt="done" className="summer" />;
          })}
        </div>
      </div>
      <PropHomeImg imgname={firstmyntra} />
      <PropHomeImg imgname={secondimg} />
      <PropHomeImg imgname={thirdImg} />
      <PropHomeImg imgname={fourimg} />
    </>
  );
};
export default CreateMainPage;
