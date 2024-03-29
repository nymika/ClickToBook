import React, {Component} from 'react';
import { Slide } from 'react-slideshow-image';

import styles from './stylesheets/slider.module.css';

import slider1 from './images/slider1.jpg';/*/static/media/slider1.ff0b32f3.jpg*/
import slider2 from './images/slider2.jpg';/*/static/media/slider2.b420343f.jpg */
import slider3 from './images/slider3.jpg';/*/static/media/slider3.b4d7fdc0.jpg*/
import slider4 from './images/slider4.jpg';/*/static/media/slider4.b1c9f471.jpg*/
import slider5 from './images/slider5.jpg';/*/static/media/slider5.06f2f695.jpg*/

// const slideImages = [
//     slider1,
//     slider2,
//     slider3,
//     slider4,
//     slider5
//     // '../images/slider2.jpg',
//     // '/static/media/slider3.b4d7fdc0.jpg',
//     // {src : '/static/media/slider4.b1c9f471.jpg'},
//     // {src : '../images/slider5.jpg'}
// ];

const properties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    pauseOnHover: true,
    // onChange: (oldIndex, newIndex) => {
    //     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    // }
}

class Slideshow extends Component {
    
    render() {
    return (
        <div className={styles.slidecontainer}>
            {/* {console.log(slider1)}
            {console.log(slider2)}
            {console.log(slider3)}
            {console.log(slider4)}
            {console.log(slider5)} */}
            <Slide {...properties}>
                <div className={styles.eachslide}>
                    <img src={slider1} width="100%" height="100%" alt=""/>
                </div>
                <div className={styles.eachslide}>
                    <img src={slider5} width="100%" height="100%" alt=""/>
                </div>
                <div className={styles.eachslide}>
                    <img src={slider3} width="100%" height="100%" alt=""/>
                </div>
                <div className={styles.eachslide}>
                    <img src={slider4} width="100%" height="100%" alt=""/>
                </div>
                <div className={styles.eachslide}>
                    <img src={slider2} width="100%" height="100%" alt=""/>
                </div>
                
            </Slide>
            </div>
    )}
}

export default Slideshow;