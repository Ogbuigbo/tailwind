import React from 'react';
import ImagerSlider from './ImagerSlider'

function ImageSlide() {

    const slides =[
        {url: 'https://obiwezy.com/media/magiccart/magicslider/o/b/obiwezy_charger_1920_x_630px_1.jpg', title: 'obiweezy-one' },
        {url: 'https://obiwezy.com/media/magiccart/magicslider/z/i/zilla_1920_x_630px.jpg', title: 'obiweezy-two' },
        {url: 'https://obiwezy.com/media/magiccart/magicslider/t/r/trip_sound_920_x_360px.jpg', title: 'obiweezy-three' },
        {url: 'https://obiwezy.com/media/magiccart/magicslider/j/o/joystick_game_q12_1920_x_630px.jpg', title: 'obiweezy-four' }
    ];

    const containerStyles ={
      width: '100%',
      height: '200px',
      margin: '20px auto'
    }

  return (
    <div className='imageSlide'>
        <div style={containerStyles}>
    <ImagerSlider slides={slides} />
    </div>
    </div>
  )
}

export default ImageSlide