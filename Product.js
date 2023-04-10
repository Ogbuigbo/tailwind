import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { UseStateVal } from './StateProvider';


function Product({id, title, image, price, rating, brand, description}) {


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


  const addToImg = () =>{
    dispatch({
      type: 'IMG',
      item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
            brand: brand,
            description: description
      },
    })
  }

  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong></p>
            <div className='product__rating'>
            {Array(rating)
            .fill()
            .map((_, i)=>(<p>⭐</p>))}
            </div>
        </div>
        
       <Link to='product-layout' className=''> <img onClick={addToImg}  src={image} alt='' className='product__image' /> </Link>
       
        <button className='product__button' onClick={addToBasket}>Add to cart</button>




    </div>

    
  )
}

export default Product