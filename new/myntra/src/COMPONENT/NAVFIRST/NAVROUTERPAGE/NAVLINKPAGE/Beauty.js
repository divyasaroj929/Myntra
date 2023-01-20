import React from "react";
import Picture from "../../../../shop/Picture";
import Tops from "../../../../MAIN/ImageSection/Tops.jpg";
import six from "../../../../MAIN/ImageSection/six.jpg";
import Filter from "../../../../shop/Filter";
import NavbarShop from "../../../../shop/NavbarShop";

const Beauty = () => {
  const row = [
    {
      name: "chamistey",
      price: 55,
      size: "sm,s,l,xl,xxl,xxxl",
      img: Tops,
      para: "XS, S, M, L, XL, XXL, 3X",
    },
    {
      name: "chamistey",
      price: "385$",
      size: "s,m,l,xl,xxl,xxxl",
      img: Tops,
    },
    {
      name: "chamistey",
      price: "35$",
      size: "sm,s,l,xl,xxl,xxxl",
      img: Tops,
    },
    { name: "chamistey", price: "59$", size: "sm,s,l,xl,xxl,xxxl" },

    { name: "chamistey", price: "85$", size: "sm,s,l,xl,xxl,xxxl", img: six },
    {
      price: "05$",
    },
  ];

  const List = [
    { title: "T-shirt", className: "list" },
    {
      title: "jeans",
      className: "list",
    },
    {
      title: "Trousers",
      className: "list",
    },
    {
      title: "Sweaters",
      className: "list",
    },
    {
      title: "jeckets",
      className: "list",
    },
    {
      title: "Shorts",
      className: "list",
    },
    {
      title: "turck-Pants",
      className: "list",
    },
    {
      title: "Trousers",
      className: "list",
    },
  ];

  console.log("juijnoj");
  return (
    <>
      <NavbarShop
        gendername="Mens Casual Wear  "
        count="6789$"
        heading="Filter"
        clearall="Clear-all"
        shortby="short-by"
        recommended="recommended"
      />
      <div className="first-div-filter">
        <Filter FilterList={List} />
        <Picture priceData={row} />
      </div>
    </>
  );
};

export default Beauty;
