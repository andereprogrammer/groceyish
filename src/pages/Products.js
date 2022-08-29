import React from 'react'
import Header from '../comonents/Header'
import VisualInformationList from '../comonents/VisualInformationList'
import './Products.scss'
import Footer from '../comonents/Footer';
import { useLocation } from 'react-router-dom'
import data from '../config/ProductData';
import CategoryListProduct from '../comonents/CategoryListProduct'


function Products() {
    const location = useLocation()
    let value = location.state
    let fin = {name:""};
    let categoryItems = []

    if(Object.keys(value) === "name"){
      data.map((d)=>{
        if(value.name == d.productCategory){
            categoryItems.push(d)
        }
    })
     fin.name=value
    }else{
      fin.name = value.itemInfo.productInfo.productCategory
      data.map((d)=>{
        if(value.itemInfo.productInfo.productCategory == d.productCategory){
            categoryItems.push(d)
        }
    })
    }
    
  return (
    <div className='product_wrapper'>
        <Header/>
        <div className='filler'></div>
        <CategoryListProduct itemSelect={fin}/>
        {categoryItems.length>0 ? <VisualInformationList list={categoryItems}/> : <div className='oops'>No items found for this category<img src="/images/images.png" alt="" /></div>}
        <Footer/>
    </div>
  )
}

export default Products