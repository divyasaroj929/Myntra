import React from "react";
import { BiCaretLeft, BiRupee } from "react-icons/bi";
const Rightsidebar = () => {
  return (
    <>
      <div className="flat">
        <div className="side-bar">
          <BiCaretLeft className="arrow" />
        </div>
        <div className="p3">
          FLAT
          <BiRupee className="rupee" />
          400 OFF
        </div>
      </div>
    </>
  );
};
export default Rightsidebar;
