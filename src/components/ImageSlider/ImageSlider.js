import React from 'react';
import { Slide } from 'react-slideshow-image';
import ImageSlide1 from './imgslide1.jpg';
import ImageSlide2 from './imgslide2.jpg';
import ImageSlide3 from './imgslide3.jpg';

const images = [
    ImageSlide1,
    ImageSlide2,
    ImageSlide3
  ];

const ImageSlider = () => {
    return (
        <div className='shadow-2 mt4'>
            <Slide
            images={images}
            duration={5000}
            transitionDuration={1000}
            />
        </div>
        
    )
}

export default ImageSlider;