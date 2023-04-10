import React, { useEffect } from 'react';
import Layout from './Layout';
import CheckoutProduct from './CheckoutProduct';
import { UseStateVal } from './StateProvider';


function Productlayout() {

 

const[{basket,img}] = UseStateVal();

  return (
    <div style={{marginTop: 20}}>
      <div>
        {img.map((item)=>
        < Layout
        image={item.image}
        title= {item.title}
        brand={item.brand}
        rating={item.rating}
        price={item.price}
        description={item.description}
        />
)}
      </div> 
    </div>
  )
}

export default Productlayout