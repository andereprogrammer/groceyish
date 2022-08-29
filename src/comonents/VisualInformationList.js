import React, { useEffect, useState } from "react";
import productdata from "../config/ProductData";
import "./VisualInformationList.scss";
import ItemCardDetailed from "./ItemCardDetailed";

function VisualInformationList(props) {
  const data = props.list;
  let [nutriValue, setValue] = useState("Carbohydrates");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const productNutriList = [
    "Carbohydrates",
    "Protiens",
    "fat",
    "Energy",
    "transFat",
    "Sodium",
  ];
  const handleScroll = () => {
    document.querySelector(".list_items_container").scrollLeft += 90;
  };

  return (
    <div className="visual_list">
      <div className="visual_list_wrapper">
        <div className="listheader">
          <div className="leftheader">
            Visual Information{" "}
            <select onChange={(e) => handleChange(e)}>
              {" "}
              {productNutriList.map((i) => {
                return (
                  <option key={i} value={i}>
                    {i}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="rightheader" onClick={handleScroll}>
          </div>
        </div>
       <div className="container">
       {data.length > 0 ? (
            data.map((p) => {
              return (
                <ItemCardDetailed
                  productInfo={p}
                  productNutrition={nutriValue}
                />
              );
            })
          ) : (
            <div></div>
          )}
       </div>
      </div>
    </div>
  );
}

export default VisualInformationList;
