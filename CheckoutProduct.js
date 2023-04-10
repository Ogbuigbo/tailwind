import React from 'react';
import './CheckoutProduct.css'
import { UseStateVal } from './StateProvider';

function CheckoutProduct({id, title, image, rating, price, brand}) {

  const [{basket}, dispatch] = UseStateVal()


  const removeFromBasket =()=> {
      dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
      })
  }


  return (
    <div className='checkoutproduct'>
        <img className='checkoutproduct__img'  src={image} />


        <div className='checkoutproduct__info'> 
            <p className='checkoutproduct__title'>{title}</p>
            <p className='checkoutproduct__brand'>Brand: {brand}</p>
            <div className='product__rating'>
            {Array(rating)
            .fill()
            .map((_, i)=>(<p>⭐</p>))}
            </div>
            <p className='checkoutproduct__price'><small>$</small>
                <strong>{price}</strong></p>
                <button onClick={removeFromBasket} className='checkoutproduct__button'>Remove from Basket</button>

        </div>

        

    </div>
  )
}

export default CheckoutProduct