import React, { useState, useEffect } from 'react';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import  './ImageSlider.css';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';


function ImagerSlider({slides}) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(()=>{
    const newIntervalId = setTimeout(()=>{
      setCurrentIndex((currentIndex + 1) % slides.length);
    }, 3000);
    setIntervalId(newIntervalId);

    

    return () => clearTimeout(intervalId);
  }, [currentIndex, slides]);

  const slideStyles ={
    backgroundImage: `url(${slides[currentIndex].url}`,
  };



  const goToPrevious =()=>{
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length -1: currentIndex-1;
    setCurrentIndex(newIndex)
  }


  const goToNext =() =>{

    const isLastSlide =  currentIndex === slides.length-1;
    const newIndex = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) =>{
    setCurrentIndex(slideIndex);
  }
    

  return (
    <div  className='imageslider__container' >
      <button className='imagerslider__leftarrow' onClick={goToPrevious}> <KeyboardDoubleArrowLeftOutlinedIcon fontSize='large'/>  </button>
        
      <button  className='imagerslider__rightarrow' onClick={goToNext}> <KeyboardDoubleArrowRightOutlinedIcon fontSize='large'/> </button>
      
        <div style={slideStyles} className='imageslider__logo'></div>

        <div className='imageslider__dotscontainer' >
          {slides.map((slide, slideIndex)=>(
            <div key={slideIndex}  onClick={()=> goToSlide(slideIndex)} className='imageslider__dots'><CircleOutlinedIcon fontSize='small'/></div>
          ))}
        </div>

        
    </div>
  )
}

export default ImagerSlider