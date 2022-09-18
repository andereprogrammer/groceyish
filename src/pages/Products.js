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
    let ky = Object.keys(value)

    if(ky[0] === "name"){
      data.map((d)=>{
        console.log(d);
        if(value.name == d.productCategory){
            fin.name=value.name
            categoryItems.push(d)
        }
    })
     
    }
    if(ky[0] === "itemInfo")
    {
      fin.name = value.itemInfo.productInfo.productCategory
      console.log(fin);
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