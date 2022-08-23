import React from "react";
import "./Banner.scss";

function Banner() {
  return (
    <>
      <div className="banner_wrapper">
        <div className="right_side_banner">
          <div className="banner_box">
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
          <div className="banner_box_left"></div>
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
