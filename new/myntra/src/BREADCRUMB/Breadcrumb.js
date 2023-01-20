import React, { useState } from "react";
import MapBreadCrumb from "./MapBreadCrumb";
const Breadcrumb = () => {
  const [crumbs, setCrumb] = useState(["home", "mens", "go"]);

  const selected = (crumb) => {
    console.log(crumb);
  };
  return (
    <>
      <MapBreadCrumb crumbs={crumbs} selected={selected} />
    </>
  );
};
export default Breadcrumb;
