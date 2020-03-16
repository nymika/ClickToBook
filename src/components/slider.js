import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../stylesheets/slider.css';
import slider1 from '../images/slider1.jpg';
import slider2 from '../images/slider2.jpg';
import slider3 from '../images/slider3.jpg';

const slideImages = [
    '../images/slider1.jpg',
    '../images/slider1.jpg',
    '../images/slider1.jpg'
];

const properties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
        console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide {...properties}>
                <div className="each-slide">
                    <img src={slider1} width="100%" height="100%"/>
                </div>
                <div className="each-slide">
                    <img src={slider2} width="100%" height="100%"/>
                </div>
                <div className="each-slide">
                    <img src={slider3} width="100%" height="100%"/>
                </div>
                <div className="each-slide">
                    <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                        <span>Slide 3</span>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;