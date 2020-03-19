import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../stylesheets/slider.css';
import slider1 from '../images/slider1.jpg';/*/static/media/slider1.ff0b32f3.jpg*/
import slider2 from '../images/slider2.jpg';/*/static/media/slider2.b420343f.jpg */
import slider3 from '../images/slider3.jpg';/*/static/media/slider3.b4d7fdc0.jpg*/
import slider4 from '../images/slider4.jpg';/*/static/media/slider4.b1c9f471.jpg*/
import slider5 from '../images/slider5.jpg';/*/static/media/slider5.06f2f695.jpg*/

const slideImages = [
    slider1,
    '../images/slider2.jpg',
    '/static/media/slider3.b4d7fdc0.jpg',
    {src : '/static/media/slider4.b1c9f471.jpg'},
    {src : '../images/slider5.jpg'}
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
            {console.log(slider1)}
            {console.log(slider2)}
            {console.log(slider3)}
            {console.log(slider4)}
            {console.log(slider5)}
            <Slide {...properties}>
                <div className="each-slide">
                    <img src={slider1} width="100%" height="100%"/>
                </div>
                <div className="each-slide">
                    <img src={slideImages[0]} width="100%" height="100%"/>
                </div>
                <div className="each-slide">
                    <img src='../images/slider2.jpg' width="100%" height="100%"/>
                </div>
                <div className="each-slide">
                    <img src={slideImages[1]} width="100%" height="100%"/>
                </div>
                <div className="each-slide">
                    <img src='/static/media/slider3.b4d7fdc0.jpg' width="100%" height="100%"/>
                </div>
                <div className="each-slide">
                    <img src={slideImages[2]} width="100%" height="100%"/>
                </div>
                <div className="each-slide">
                    <img src={slideImages[3].src} width="100%" height="100%"/>
                </div>
                <div className="each-slide">
                    <img src={slideImages[4].src} width="100%" height="100%"/>
                </div>
            </Slide>
        </div>
    )
}

export default Slideshow;