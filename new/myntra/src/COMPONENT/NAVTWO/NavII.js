import React, { useState } from "react";

import { SlHeart, SlUser, SlHandbag } from "react-icons/sl";

import DropdownProflie from "../../PROFLIENAVBARII/DropdownProfile";

import PropNavII from "./PropsNavII";

import "./index.css";

import { useLocation } from "react-router-dom";

const NavII = () => {
  const location = useLocation();
  const path = location.pathname;

  console.log(path);
  return (
    <>
      <div className="nav2">
        {path == "/profile" ? (
          <div className="second-icon">
            <PropNavII
              path="/Wishlist"
              name="Wishlist"
              icon={<SlHeart className="c" />}
              index="1"
            />
            <PropNavII
              path="/Bag"
              name="Bag"
              icon={<SlHandbag className="c" />}
              index="2"
            />
          </div>
        ) : (
          <div className="three-icon">
            <ul>
              <li>
                <SlUser className="c" />
                <span className="span">Profile</span>
                <DropdownProflie />
              </li>
            </ul>
            <div className="second-icon">
              <PropNavII
                path="/Wishlist"
                name="Wishlist"
                icon={<SlHeart className="c" />}
                index="1"
              />
              <PropNavII
                path="/Bag"
                name="Bag"
                icon={<SlHandbag className="c" />}
                index="2"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavII;
