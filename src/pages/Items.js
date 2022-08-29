import React from 'react'
import Ingrideints from '../comonents/Ingrideints'
import Nutrients from '../comonents/Nutrients'
import ProductDescription from '../comonents/ProductDescription'
import Header from '../comonents/Header';
import Footer from '../comonents/Footer';
import RatingAndReview from '../comonents/RatingAndReview';
import './Items.scss'
import { NavLink, useLocation } from 'react-router-dom';

function Items() {
    const location = useLocation();
    let  itemDetails = location.state
  return (
    <div className='item_main_wrapper'>
        <Header/>
        <div className="item_back_to" >
            <NavLink style={{textDecoration: 'none'}} to={{
                pathname:"/product",
                state:itemDetails
                
            }}>
            <div className='item_back'>
                <img src="/images/backbtn.png" alt="" />
                <span>Back to products</span>
            </div>
            </NavLink>
           
        </div>
        <div className="item_component_wrapper">
            <ProductDescription dataP={itemDetails}/>
           <div className='nutri'> <h3>Nutrients :</h3> </div>
            <Nutrients dataN={itemDetails}/>
            <div className='ingri'><h3>Ingrideints :</h3> </div>
            <Ingrideints ingri={itemDetails}/>
            <RatingAndReview/>

        </div>
        <Footer/>

    </div>
  )
}

export default Items