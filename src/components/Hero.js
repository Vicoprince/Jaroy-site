import React, {useEffect, useState, useRef} from 'react';
import {IoMdArrowRoundForward} from 'react-icons/io';
import { IoArrowForward, IoArrowBack } from 'react-icons/io5';
import './Hero.css';

const Hero = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 7000)

        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        };
    }, [current, length])

    const nextSlide = () => {

         if(timeout.current) {
                clearTimeout(timeout.current)
         }

        setCurrent(current === length - 1 ? 0 : current + 1)

        // console.log(current)
    };

    const prevSlide = () => {

        if (timeout.current) {
          clearTimeout(timeout.current);
        }

        setCurrent(current === 0 ? length - 1 : current - 1)

        // console.log(current)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

  return (
    <div className="HeroSection">
        <div className="HeroWrapper">
            {slides.map((slide, index) => {
            return (
              <div className="HeroSLide" key={index}>
                {index === current && (
                  <div className="HeroSlider">
                    <img
                      className="HeroImage"
                      src={slide.image}
                      alt={slide.alt}
                    />
                    <div className="HeroContent">
                      <h1>{slide.title}</h1>
                      <p>{slide.subText}</p>
                      <div className="HeroButton-container">
                      <button className="HeroButton1" to={slide.path} primary="true">
                        {slide.label1} <IoArrowForward />
                      </button>
                      <button className="HeroButton2" to={slide.path} primary="true">
                        {slide.label2}
                      </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
            })}

            <div className="SliderButton">
                <IoArrowBack className="back-button" onClick={prevSlide}/>
                <IoArrowForward className="forward-button" onClick={nextSlide}/>
            </div>
        </div>   
    </div>
  )
}

export default Hero