import React from "react";
const BreadCrumb = (props) => {
  console.log(props);
  function isLast(index) {
    return index === props.crumbs.lenght - 1;
  }

  return (
    <>
      <nav className="row-justify-content-center">
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
      </nav>
    </>
  );
};
export default BreadCrumb;
