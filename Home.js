import React from 'react';
import './Homer.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>

        <div className='home__option'>
        <div className='home__row'>
          <img className='home__row-image' src='https://obiwezy.com/media/wysiwyg/alothemes/demo6/free-shipping0.png' alt='' />
          <div className='home__text'>
          <p>Free Delivery</p>
          <p className='home__first-text'>Terms & Conditons apply</p>
          </div>
        </div>

        <div className='home__row'>
          <img className='home__row-image' src='https://obiwezy.com/media/wysiwyg/alothemes/demo6/sticker.png' alt=''  />
          <div className='home__text'>
          <p>Obiwezy Warranty</p>
          <p className='home__first-text'>30days warranty on select items</p>
          </div>
        </div>
        
        <div className='home__row'>
          <img className='home__row-image' src='https://obiwezy.com/media/wysiwyg/alothemes/demo6/secure-payment_1.png' alt=''  />
          <div className='home__text'>
          <p>100% Secure Payment</p>
          <p className='home__first-text'> Secure transaction when you pay</p>
          </div>
        </div>

        <div className='home__row'>
          <img className='home__row-image' src='https://obiwezy.com/media/wysiwyg/alothemes/demo6/24_7.png' alt=''  />
          <div className='home__text'>
          <p>24/7 Support</p>
          <p className='home__first-text'>Contact us 24hours a day</p>
          </div>
        </div>

        <div className='home__row'>
          <img className='home__row-image' src='https://obiwezy.com/media/wysiwyg/alothemes/demo6/bag.png' alt=''  />
          <div className='home__text'>
          <p>Member Discount</p>
          <p className='home__first-text'>On every order over ₦200,000.00</p>
          </div>
        </div>
        </div>

        
        </div>

        
        <div className='home__product'>
          
        <Product
        id='001'
        title='Iphone X'
        price={700}
        image = 'https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/V/144356_1543477776.jpg'
        rating={4}
        brand= 'Apple Iphone'
        description='This pre-owned product has been professionally inspected, tested and cleaned by Obiwezy-qualified engineers. Products with batteries will exceed 80% capacity relative to new.'
        />

      <Product
        id='002'
        title='Iphone 11'
        price={600}
        image = 'https://slickmobile.com.ng/wp-content/uploads/2021/02/iphone-11-black.jpg'
        rating={4}
        brand= 'Apple Iphone'
        description='This pre-owned product has been professionally inspected, tested and cleaned by Obiwezy-qualified engineers. Products with batteries will exceed 80% capacity relative to new.'
        />

      <Product
        id='003'
        title='Iphone 12 Pro Max'
        price={900}
        image = 'https://slickmobile.com.ng/wp-content/uploads/2022/04/apple-iphone-12-pro-max-256gb-6.7.jpg'
        rating={3}
        brand= 'Apple Iphone'
        description='This pre-owned product has been professionally inspected, tested and cleaned by Obiwezy-qualified engineers. Products with batteries will exceed 80% capacity relative to new. All accessories are fully functional. '
        />

      <Product
        id='004'
        title='IPad Pro 2020'
        price={900}
        image = 'data:image/jpeg;base64,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' 
        rating={2}
        brand='Apple Iphone'
        description='This pre-owned product has been professionally inspected, tested and cleaned by Obiwezy-qualified engineers. Products with batteries will exceed 80% capacity relative to new. All accessories are fully functional. '
        />
        </div>


        <div className='home__department'>
          <img className='home__department-img' src='https://obiwezy.com/media/wysiwyg/CM.jpg' alt='obiwezzy-media' />
        </div>
        </div>
  )
}

export default Home