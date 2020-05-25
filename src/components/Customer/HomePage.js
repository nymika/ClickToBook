import React, {Component } from 'react';
import Swiper from 'swiper';

import 'swiper/css/swiper.min.css';
import './stylesheets/swiper.css';
import styles from './stylesheets/HomePage.module.css';

import action from './images/homePage Slider Images/actionedited.jpg';
import comedy from './images/homePage Slider Images/comedyedited.jpg';
import drama from './images/homePage Slider Images/dramaedited.jpg';
import crime from './images/homePage Slider Images/crimeedited.jpg';
import animated from './images/homePage Slider Images/animated.jpg';
import romance from './images/homePage Slider Images/romanceedited.jpg';
import horror from './images/homePage Slider Images/horroredited.jpg';

import hindi from './images/homePage Slider Images/hindiedited.jpg';
import english from './images/homePage Slider Images/english.jpg';
import telugu from './images/homePage Slider Images/telugu.jpg';
import punjabi from './images/homePage Slider Images/punjabi.jpg';

import Slideshow from "./slider";
import AllMovies from './AllMovies';

class HomePage extends Component {
    componentDidMount() {
        console.log(this.props);
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 7,
            spaceBetween: 30,
            // slidesPerGroup: 7,
            // loop: true,
            // loopFillGroupWithBlank: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
    }
    render() {
        return (
            <div className={styles.HomePage}>
                <Slideshow className={styles.slider}/>

                {/* <div className={styles.movieslist}>
                    <h2>Movies :</h2>
                </div>
                <AllMovies /> */}

                <h2 class="genreheading">Latest</h2>
                <h2 class="genreheading">Trending</h2>
                
                <h2 class="genreheading">Movie Genres</h2>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src={action} class="genreimage" alt="action"/>
                        </div>
                        <div class="swiper-slide">
                            <img src={comedy} class="genreimage" alt="comedy"/>
                        </div>
                        <div class="swiper-slide">
                            <img src={drama} class="genreimage" alt="drama"/>
                        </div>
                        <div class="swiper-slide">
                            <img src={crime} class="genreimage" alt="crime"/>
                        </div>
                        <div class="swiper-slide">
                            <img src={animated} class="genreimage" alt="animated"/>
                        </div>
                        <div class="swiper-slide">
                            <img src={romance} class="genreimage" alt="romance"/>
                        </div>
                        <div class="swiper-slide">
                            <img src={horror} class="genreimage" alt="horror"/>
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>


                <h2 class="genreheading">Watch in your language</h2>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src={hindi} class="genreimage" alt="hindi"/>
                        </div>
                        <div class="swiper-slide">
                            <img src={english} class="genreimage" alt="english"/>
                        </div>
                        <div class="swiper-slide">
                            <img src={telugu} class="genreimage" alt="telugu"/>
                        </div>
                        <div class="swiper-slide">
                            <img src={punjabi} class="genreimage" alt="punjabi"/>
                        </div>
                       
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>

                <h2 class="genreheading">Your Recommendations</h2>
                <AllMovies />

            </div>
           )
        }
}

export default HomePage;