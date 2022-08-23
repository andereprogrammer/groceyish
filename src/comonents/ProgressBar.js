import React from 'react';
import './ProgressBar.scss';

function ProgressBar(props) {
    let percent  = (props.productNutrition / 100)*100
    console.log(percent);
    let bg="percent_0";

  
         if(percent <= 20 && percent > 0){
            bg="percent_20"
           

         }
           
        else if (percent <= 35 && percent > 20){
            bg="percent_35"
        
        }
            
        else if (percent <= 50 && percent > 35){
            bg="percent_50"
           
        }
             
        else if (percent <= 75 && percent > 50){
            bg="percent_75"
           
        }
            
        else if (percent <= 100 && percent > 75){
            bg="percent_100"
           
        }
                      
    
     
   
  return (
    <>
    <div className="progress_wrapper">
        {
        [1,2,3,4,5].map((i)=>{
            return (
                <div className={`progress_chip ${bg}`} >

                </div>
            )
        })

        }
       
    </div>
        
    </>
  )
}

export default ProgressBar