import React from 'react';
import { NavLink } from 'react-router-dom';
import './CategoryList.scss'

function CategoryList() {
    const category = [{
        id:"1",
        src:"/images/Batter.png",
        name:"Ready made"
    },
    {
        id:"2",
        src:"/images//motherdiary.png",
        name:"Dairy"
    },{
        id:"3",
        src:"/images/Cavins.png",
        name:"Drinks"
    },{
        id:"4",
        src:"/images/Nutella.png",
        name:"Spreads"
    },{
        id:"5",
        src:"/images/Oreo.png",
        name:"Biscuits"
    },{
        id:"6",
        src:"/images/Refined Oil.png",
        name:"Oils"
    },{
        id:"7",
        src:"/images/image 9.png",
        name:"Vegies"
    },{
        id:"8",
        src:"/images/image 7.png",
        name:"Fruits"
    }]
    const handleClick = (id) =>{
        category.map((m)=>{
            let temp = document.getElementById(m.id)
            temp.classList.remove('imgactive')
            let t = document.getElementById(m.name)
            t.classList.remove('active')
        })
        let ele = document.getElementById(id.id)
        let nm = document.getElementById(id.name)
       ele.classList.add('imgactive');
       nm.classList.add('active')
    }
  return (
    <>
    <div className="category_wrapper">
      <div className="categrory_title">Choose Your Category</div>
            {
                category.map((item,index)=>{
                   return (
                    <NavLink key={item.id} id={`items${item.id}`} className="item_wrapper" to={{
                        pathname:"/product",
                        state:{
                            name:item.name
                        }
                    }} >
                        <div onClick={()=>handleClick(item)} key={item.id} id={item.id} className='item_div'>
                            <span className='shadow'></span>
                        <img key={item.id} src={item.src} alt={item.id} />
                        </div>
                        <div className="name" id={item.name}>{item.name}</div>
                    </NavLink>
                   )
                })
            }
       
    </div>
    </>
  )
}

export default CategoryList