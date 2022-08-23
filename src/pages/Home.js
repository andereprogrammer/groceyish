import React from 'react'
import './Home.scss'
import Header from '../comonents/Header';
import Banner from '../comonents/Banner';
import CategoryList from '../comonents/CategoryList';
import ProductListPrediction from '../comonents/ProductListPrediction';
import Footer from '../comonents/Footer';

function Home() {
  return (
    <div className='home_main_wrapper'>
        <Header/>
        <Banner/>
        <CategoryList/>
        <ProductListPrediction/>
        <Footer/>
       
    </div>
  )
}

export default Home