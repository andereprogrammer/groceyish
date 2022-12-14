import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "./ProductListPrediction.scss";
import productdata from "../config/ProductData";

function ProductListPrediction() {
  const data = productdata;
  let [nutriValue, setValue] = useState("Carbohydrates");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const productNutriList = [
    "Carbohydrates",
    "Proteins",
    "fat",
    "Energy",
    "transFat",
    "Sodium",
  ];
  const handleScroll = () => {
    document.querySelector(".list_items_container").scrollLeft += 90;
  };

  return (
    <div className="prediction_list">
      <div className="prediction_list_wrapper">
        <div className="listheader">
          <div className="leftheader">
            Based on your Previous Orders * {" "}
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
            <img src="/images/backarrow.png" alt="arrow" />
          </div>
        </div>
        <div className="list_items_container">
          {data.length > 0 ? (
            data.map((p) => {
              return <ItemCard productInfo={p} productNutrition={nutriValue} />;
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductListPrediction;
