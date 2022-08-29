import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <>
      <div className="banner_heading">
        <h2>Welcome to <span className="banner_com">Groceyish</span></h2>
      </div>
      <div className="banner_wrapper">
        <div className="right_side_banner">
          <div className="banner_box">
            <img src="/images/bg2.png" alt="" />
            <div className="banner_textarea">
            <p>Purchase grocery while easily understanding what it is you buy with the visual representation of the nutrients of the product. </p>

            </div>
          </div>
          <img
            className="right_side_img"
            src="/images/Group 23.png"
            alt="bg-img"
          />
        </div>
        <div className="left_side_banner">
          <div className="banner_box_left">
          <img src="/images/bg1.png" alt="" />

            <div className="banner_textarea">
                <p>Know about the ingridients present in your food with images that will help you to have a better understanding on the grocery that you are buying.</p>
            </div>
          </div>
          <img
            className="left_side_img"
            src="/images//Group 77.png"
            alt="bg-img"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
