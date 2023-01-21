import React from "react";
import Filter from "./Filter";
import FilterParaProps from "./FilterParaProps";
import PropDiv from "../PROFLIENAVBARII/PropDiv";
import { BiChevronDown } from "react-icons/bi";
import ShortBy from "./ShortBy";
import "./index.css";

const NavbarShop = (props) => {
  console.log("hjuuhi");
  console.log(props);
  // function isLast(index) {
  //   return index === props.crumbs.lenght - 1;
  // }

  return (
    <>
      <div className="main-container-middle-section ">
        <div className="second-head">
          <div className="head-section">
            <ul>
              <li>
                <a href="/">home</a>
              </li>
              <li>
                <a href="/Woman">Clothing</a>
              </li>
              <li>
                <a href="/Man">Men Casual Wear </a>
              </li>
            </ul>
          </div>

          {/* <nav className="row-justify-content-center">
            <ol
              className="breadcrumb"
              style={{
                backgroundColor: "teal",
                border: "1px solid black",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                listStyle: "none",
              }}
            >
              {props.crumbs.map((crumb, ci) => {
                const disabled = isLast(ci) ? `disabled` : "";
                return (
                  <>
                    <li className="breadcrumd-item align-item-center">
                      <button
                        className={`btn 
                       btn-link${disabled}`}
                        onClick={() => props.selected(crumb)}
                      >
                        {crumb}
                      </button>
                    </li>
                  </>
                );
              })}
            </ol>
          </nav> */}

          <div className="p4">
            {props.gendername} - <div className="p5">{props.count}</div>
          </div>
          <div className="filter-first-component">
            <div className="filter-clear-all">
              <FilterParaProps
                heading={props.heading}
                style={{
                  color: "black",
                  fontWeight: "500",
                  fontSize: "15px",
                }}
              />
              <FilterParaProps
                heading={props.clearall}
                style={{
                  fontWeight: "600",
                  color: "#ff3f6c",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
              />
            </div>
            <PropDiv
              className="short-by"
              value={[
                <span>{props.shortby} :</span>,
                <h1>{props.recommended}</h1>,
                <BiChevronDown className="bottom-arrow" />,
                <ShortBy />,
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default NavbarShop;
