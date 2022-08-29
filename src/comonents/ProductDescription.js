import React, { useState } from "react";
import "./ProductDescription.scss";

function ProductDescription(props) {
  let productImg = props.dataP.itemInfo.productInfo.productImage
  let proSec = props.dataP.itemInfo.productInfo.productSecImage
  let [mainImage, setMain] = useState(productImg);
  let [otherImages, setOther] = useState(proSec);
  let [otherImages2, setOther2] = useState(productImg);
  let [otherImages3, setOther3] = useState(proSec);
  let [counter, setCounter] = useState(0);
  let desc = props.dataP.itemInfo.productInfo.prodcutDescription;
  let price = props.dataP.itemInfo.productInfo.productPrice
  const handleMinus = () => {
    counter -= 1;
    setCounter(counter);
  };
  const handlePlus = () => {
    counter += 1;
    setCounter(counter);
  };
  const handleImage = (event) => {
    let m = document.getElementById("mainImage");
    setMain(event.target.src);
   
  };
  return (
    <div className="product_descp_wrapper">
      <div className="product_image_container">
        <div className="product_side_images">
          <img src={otherImages} alt="" onClick={handleImage} />
          <img src={otherImages2} alt="" onClick={handleImage} />
          <img src={otherImages3} onClick={handleImage} alt="" />
        </div>
        <div className="product_main_image">
          <img src={mainImage} alt="" id="mainImage" />
        </div>
      </div>
      <div className="product_text_descp_container">
        <h3>Product Description</h3>
        <div className="product_text">
          <p>{desc}</p>
        </div>
        <div className="product_price"><img src="/images/pound.png"/>{price}</div>
        <div className="product_star_rating">
          {[1, 2, 3, 4].map((i) => {
            return (
              <div className="item_detail_img_space_rating">
                <img src="/images/star.svg" alt="" />
              </div>
            );
          })}
        </div>
        <div className="product_add_cart_container">
          <div className="product_add_btns">
            <div className="minus_btn btn" onClick={handleMinus}>
              -
            </div>
            {counter}
            <div className="plus_btn btn" onClick={handlePlus}>
              +
            </div>
          </div>
          <div className="product_add_cart_cta">Add to Cart</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
