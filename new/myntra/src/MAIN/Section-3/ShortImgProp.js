import React from "react";
const ShortImgProp = (Props) => {
  return (
    <>
      <div className="multi-img">
        {<img src={Props.shortIMG} alt="done" className={Props.shortimg} />}
      </div>
    </>
  );
};
export default ShortImgProp;
