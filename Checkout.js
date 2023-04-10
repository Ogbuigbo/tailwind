import React from 'react';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { UseStateVal } from './StateProvider'

function Checkout() {

    const[{basket}, dispatch] = UseStateVal();
  return (
    <div className='checkout'>

        <div className='home__department'>
          <img className='home__department-img' src='https://obiwezy.com/media/wysiwyg/CM.jpg' alt='obiwezzy-media' />
        </div>

        <div className='checkout__title'>
            {basket.map((item)=>(
                <CheckoutProduct 
                image={item.image}
                title={item.title}
                id={item.id}
                price= {item.price}
                rating= {item.rating}
                brand ={item.brand}
                />
            ))}
        </div>
    </div>
  )
}

export default Checkout