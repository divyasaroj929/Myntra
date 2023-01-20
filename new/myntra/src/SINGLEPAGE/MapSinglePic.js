import React from "react";
const SinglePic = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="one-product">
        {data.map((value) => {
          console.log(value.img);
          return (
            <div className="product">
              <img src={value.img} alt="" className="Tops" />
            </div>
          );
        })}
      </div>
      <div className="info">
        <div className="info-head">
          <h1></h1>
          <p1></p1>
          <div className="rating-or-star"></div>
        </div>
      </div>
    </>
  );
};

export default SinglePic;
