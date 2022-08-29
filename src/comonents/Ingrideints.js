import React, { useState } from 'react';
import './Ingridients.scss';
import data from '../config/ProductData';

function Ingrideints() {
    let ingri = data[0].productIngridients
    let [descrp,setDescrp]= useState("Chocolate is sold directly to the consumer as solid bars of eating chocolate, as packaged cocoa, and as baking chocolate. It is also used by confectioners as coating for candy bars and boxed or bulk chocolates, by bakery product manufacturers and bakers as coating for many types of cookies and cakes, and by ice-cream companies as coating for frozen novelties. Cocoa powders, chocolate liquor, and blends of the two are used in bulk to flavour various food products and to provide the flavours in such “chocolate” products as syrups, toppings, chocolate milk, prepared cake mixes, and pharmaceuticals")
    let [title,setTitle] = useState("Cocoa")
    const handleClick = (i) =>{
       setTitle(i.name)
       setDescrp(i.desc)

    }
  return (
    <div className='ingirdients_main'>
        <div className="ingridients_image_box">
{
    ingri.map((item)=>{
        return (
            <>
              <div className='img_container'>
             <img src={item.img_item} onClick={()=>handleClick(item)} alt="" />
            </div>
            <div>{item.name}</div>
            </>
          
        )
    })
}

        </div>
        <div className="ingridents_descrp_box">
            <div className="title_box">
            {title}

            </div>
            <div className="decription_box">
                {descrp}
            </div>
        </div>
    </div>
  )
}

export default Ingrideints