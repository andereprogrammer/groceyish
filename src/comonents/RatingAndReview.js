import React from 'react';
import './RatingAndReview.scss'
import LinearBar from './LinearBar';

function RatingAndReview() {
  return (
    <div className='review_main_container'>
        <h3>Rating and Review :</h3>
        <div>
          <div className='review_rates'>
          <div className="review_box">
            <div className="review"><span>5</span><img src='/images/StarGreay.png'/><LinearBar bgcolor="#5CBF43" progress='50'  height={20} /><span>(2)</span></div>
            <div className="review"><span>4</span><img src='/images/StarGreay.png'/><LinearBar bgcolor="#5CBF43" progress='0'  height={20} /><span>(0)</span></div>
            <div className="review"><span>3</span><img src='/images/StarGreay.png'/><LinearBar bgcolor="#5CBF43" progress='20'  height={20} /><span>(1)</span></div>
            <div className="review"><span>2</span><img src='/images/StarGreay.png'/><LinearBar bgcolor="#5CBF43" progress='30'  height={20} /><span>(1)</span></div>
            <div className="review"><span>1</span><img src='/images/StarGreay.png'/><LinearBar bgcolor="#5CBF43" progress='0'  height={20} /><span>(0)</span></div>
        </div>
        <div className='rating_numbers'>
          <div className='rating_star_number'><span>4</span><img src="/images/Stargreen.png" alt="" /></div>
          <div className='rating_text'>4 ratings</div>
        </div>
          </div>
        
        <div className='review_text'>
Have you Used this product? Please help us by submitting a review.
</div>
<div className='button_container'>
    <button className='btn'>Review</button>
</div>
        </div>
      
        <div className="rating_area_empty"></div>
    </div>
  )
}

export default RatingAndReview