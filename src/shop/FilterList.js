import React from "react";
import { TiTick } from "react-icons/ti";

// import CheckBox from "./CheckBox";
const FilterList = (Props) => {
  return (
    <>
      <div className="Fliter-list">
        <input type="checkbox" value="name" />
        {/* <TiTick /> */}

        <p className="Fliter-list p">{Props.title}</p>
      </div>
    </>
  );
};
export default FilterList;
