import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import './ItemCard.scss';

function ItemCard(props) {
    let keys = Object.keys(props.productInfo.productNutrition); 
    let mainValue = props.productInfo.productNutrition[props.productNutrition]
//    keys.map((k)=>{
//     if( props.productNutrition == k){
//       val = props.productInfo.productNutrition[k]
//     }
//    })
    
  return (
    <div>
        <div className="item_container_wrapper">
            <div className="img_space">
                <img src="/images/Grocerish/Product Images/Based on your order view/Licious.png" alt="item_img" />
            </div>
            <div className="item_name">{props.productInfo.productName} </div>
            <div className="item_contain_molecule">{props.productNutrition} : {mainValue}g</div>
            <div className="item_progress_bar">
                <ProgressBar productNutrition={mainValue}/>
            </div>
            <div className="item_pricing">
            {props.productInfo.productPrice}
            </div>
        </div>
    </div>
  )
}

export default ItemCard