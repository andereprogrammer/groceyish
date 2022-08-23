import React from 'react';
import './CategoryList.scss'

function CategoryList() {
    const category = [{
        id:"1",
        src:"/images/Grocerish/Category Images/Batter.png"
    },
    {
        id:"2",
        src:"/images/Grocerish/Category Images/motherdiary.png"
    },{
        id:"3",
        src:"/images/Grocerish/Category Images/Cavins.png"
    },{
        id:"4",
        src:"/images/Grocerish/Category Images/Nutella.png"
    },{
        id:"5",
        src:"/images/Grocerish/Category Images/Oreo.png"
    },{
        id:"6",
        src:"/images/Grocerish/Category Images/Refined Oil.png"
    },{
        id:"7",
        src:"/images/Grocerish/Category Images/image 9.png"
    },{
        id:"8",
        src:"/images/Grocerish/Category Images/image 7.png"
    }]
  return (
    <>
    <div className="category_wrapper">
      <div className="categrory_title">Choose Your Category</div>
            {
                category.map((item,index)=>{
                   return (
                    
                    <div key={item.id} id={item.id} className="item_wrapper">
                        <div key={item.id} className='item_div'>
                        <img key={item.id} src={item.src} alt={item.id} />
                        </div>
                    </div>

                    
                   )
                })
            }
       
    </div>
    </>
  )
}

export default CategoryList