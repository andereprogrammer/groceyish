import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import "./ItemCardDetailed.scss";
import { NavLink } from "react-router-dom";

function ItemCardDetailed(props) {
  let it = props
  let keys = Object.keys(props.productInfo.productNutrition);
  let mainValue = props.productInfo.productNutrition[props.productNutrition];
  return (
    <div className="item_detail">
      <div className="item_detail_container_wrapper">
        <div className="item_detail_img_space">
          <img
            src={props.productInfo.productImage}
            alt="item_detail_item_img"
          />
        </div>
        <div className="item_detail_item_name">
          {props.productInfo.productName}{" "}
          <div className="item_detail_pricing">
            <img src="/images/pound.png"/> {props.productInfo.productPrice}
          </div>
        </div>
        <div className="item_detail_contain_molecule">
          {props.productNutrition} - {mainValue}g
        </div>
        <div className="item_detail_progress_bar">
          <ProgressBar productNutrition={mainValue} />
        </div>
        <div className="item_detail_star_rating">
        <div className="item_detail_img_space_rating">
          {[1, 2, 3, 4].map((i) => {
            return (
                <img src="/images/star.svg" alt="" key={i}/>
            );
          })}
          <img src="/images/inactive.png" alt="" /><span className="number">(4)</span>
        </div>

        </div>
        <div className="item_detail_btn_wrapper">
          <NavLink
          style={{ textDecoration: 'none' }}
          to={{
            pathname:"/item",
            state:{
                itemInfo:it
            }
          }}><div className="item_detail_nutrients_btn">View Nutrients</div></NavLink> 
          <div className="item_detail_nutrients_img">
            <img src="/images/favicn.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCardDetailed;
