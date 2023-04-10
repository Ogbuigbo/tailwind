import React, { useState, useEffect } from 'react';

const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000);
    setIntervalId(newIntervalId);

    return () => clearInterval(intervalId);
  }, [currentImageIndex, images]);

  return (
    <img src={images[currentImageIndex]} alt="Slider" />
  );
};

export default ImageSlider;
