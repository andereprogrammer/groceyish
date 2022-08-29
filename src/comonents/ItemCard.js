import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import './ItemCard.scss';

function ItemCard(props) {
    let keys = Object.keys(props.productInfo.productNutrition); 
    let mainValue = props.productInfo.productNutrition[props.productNutrition]
    let val = props.productNutrition
//    keys.map((k)=>{
//     if( props.productNutrition == k){
//       val = props.productInfo.productNutrition[k]
//     }
//    })
    
  return (
    <div>
        <div className="item_container_wrapper">
            <div className="img_space">
                <img src={props.productInfo.productImage} alt="item_img" />
                <span className='add_btn'><img src="/images/add.png" alt="" /></span>
            </div>
            <div className="item_name">{props.productInfo.productName} </div>
            <div className="item_contain_molecule">{props.productNutrition} - {mainValue}g</div>
            <div className="item_progress_bar">
                <ProgressBar productNutrition={mainValue} productNutriName = {val}/>
            </div>
            <div className="item_pricing">
                <img src="/images/pound.png" alt="" />
            {props.productInfo.productPrice}
            </div>
        </div>
    </div>
  )
}

export default ItemCard