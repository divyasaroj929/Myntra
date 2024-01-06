import React from "react";
import Tops from "../MAIN/ImageSection/Tops.jpg";
import fiveimg from "../MAIN/ImageSection/fiveimg.jpg";
import MapSinglePic from "./MapSinglePic";
import "./Studio.css";
const pic = [
  {
    img: Tops,
  },
  {
    img: fiveimg,
  },
  {
    img: fiveimg,
  },
  {
    img: fiveimg,
  },
];
console.log(pic);
const SinglePic = ({ children }) => {
  console.log("pic");
  return (
    <div className="one-product-disclamer">
      <MapSinglePic data={pic} />
      <div className="children">{children}</div>
    </div>
  );
};

export default SinglePic;
