import React from 'react'
import { UseStateVal } from './StateProvider';
import './Layout.css'

function Layout({id,title, image, brand, rating, price, description}) {

  const [{basket}, dispatch] = UseStateVal();


  const addToBasket = () =>{
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
            brand: brand
      },
    });
  };

  return (
    <div className='layout'>
        <img className='layout__image'  src={image} />

        <div className='layout__info'>
        <h2 className='layout__title'>{title}</h2>
        <p><strong>Brand:</strong> {brand}</p>
        <div className='layout__rating'>
          <strong>Rating:</strong>
            {Array(rating)
            .fill()
            .map((_, i)=>(<p>⭐</p>))}
            </div>
        <p className='layout__price'>${price}</p>
        <p className='layout__description'><strong>Description:</strong>{description}</p>

        <button className='layout__button' onClick={addToBasket}>Add to cart</button>
        </div>

          
    </div>
  )
}

export default Layout;