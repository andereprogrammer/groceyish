import React from 'react'
import CategoryList from '../comonents/CategoryList'
import Header from '../comonents/Header'
import VisualInformationList from '../comonents/VisualInformationList'
import './Products.scss'
import Footer from '../comonents/Footer';
import { useLocation } from 'react-router-dom'
import data from '../config/ProductData';


function Products() {
    const location = useLocation()
    let value = location.state
    let categoryItems = []
    data.map((d)=>{
        if(value.name == d.productCategory){
            console.log('object');
            categoryItems.push(d)

        }
    })
    console.log(categoryItems);
    
  return (
    <div className='product_wrapper'>
        <Header/>
        <div className='filler'></div>
        <CategoryList/>
        {categoryItems.length>0 ? <VisualInformationList list={categoryItems}/> : <div className='oops'>No items found for this category<img src="/images/images.png" alt="" /></div>}
       
        <Footer/>
    </div>
  )
}

export default Products