import React from "react";
import "./ProgressBar.scss";

function ProgressBar(props) {
  let percent;
  let ingri = props.productNutriName
  let bg_20 = "percent_0";
  let bg_50 = "percent_0";
  let bg_75 = "percent_0";
  let bg_100 = "percent_0";

  if(ingri === "Energy"){
    percent=  (props.productNutrition / 1000) * 100;
  }else{
    percent = (props.productNutrition / 100) * 100;
  }

if(ingri === "Protiens"){
    console.log('object');
    if (percent <= 25 && percent > 0) {
        bg_20 = "percent_20_p";
      } else if (percent <= 50 && percent > 25) {
        bg_20 = "percent_20_p";
        bg_50 = "percent_50_p";
      } else if (percent <= 75 && percent > 50) {
        bg_20 = "percent_20_p";
        bg_50 = "percent_50_p";
        bg_75 = "percent_75_p";
      } else if (percent <= 100 && percent > 75) {
        bg_20 = "percent_20_p";
        bg_50 = "percent_50_p";
        bg_75 = "percent_75_p";
        bg_100 = "percent_100_p";
      } 
    
}else{
    if (percent <= 25 && percent > 0) {
        bg_20 = "percent_20";
      } else if (percent <= 50 && percent > 25) {
        bg_20 = "percent_20";
        bg_50 = "percent_50";
      } else if (percent <= 75 && percent > 50) {
        bg_20 = "percent_20";
        bg_50 = "percent_50";
        bg_75 = "percent_75";
      } else if (percent <= 100 && percent > 75) {
        bg_20 = "percent_20";
        bg_50 = "percent_50";
        bg_75 = "percent_75";
        bg_100 = "percent_100";
      } 
    
}
  
  return (
    <>
      <div className="progress_wrapper">
        {
          <>
            <div className="progress_chip_bar">
              <div className={`progress_chip ${bg_20}`}></div>
            </div>
            <div className="progress_chip_bar">
              <div className={`progress_chip ${bg_50}`}></div>
            </div>{" "}
            <div className="progress_chip_bar">
              <div className={`progress_chip ${bg_75}`}></div>
            </div>{" "}
            <div className="progress_chip_bar">
              <div className={`progress_chip ${bg_100}`}></div>
            </div>
          </>
        }
      </div>
    </>
  );
}

export default ProgressBar;
