import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

import deadpool from "./images/deadpool.jpg";
import alice from "./images/alice.jpg";
import harrypotter from "./images/deathly-hallows-p2-2.jpg";
import FF from "./images/fast-five-2.jpg";
import batman from "./images/batman-v-superman-dawn-of-justice-3.jpg";
import alpha from "./images/alpha-alert-1.jpg";

import Slideshow from "./slider";
import AllMovies from './AllMovies';

class HomePage extends Component {

    state = {
        latestMovies: [
            { id: 'Deadpool', Title: 'Deadpool', Poster: deadpool },
            { id: 'Alice', Title: 'Alice through the looking glass', Poster: alice },
            { id: 'HarryPotter', Title: 'HarryPotter', Poster: harrypotter },
            { id: 'FF', Title: 'Fast&Furious', Poster: FF },
            { id: 'Batman', Title: 'Batman', Poster: batman },
            { id: 'alpha', Title: 'Alpha Alert', Poster: alpha },
            { id: 'ASVR', Title: 'ASVR', Poster: deadpool }
        ]
    }

    componentDidMount() {
        console.log(this.props);
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 7,
            spaceBetween: 10,
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

        let trendingmoviesList = (
            <div class="swiper-container">
                <div class="swiper-wrapper">

                    {
                        this.state.latestMovies.map(i => {
                            return (
                                <div class="swiper-slide">
                                    <Link key={i.id}
                                        to={`/MovieDetailPage/${i.id}`}>
                                        <img src={i.Poster} class="posterimage" alt="trendingmovie" onClick= { () => window.scrollTo(0,0)}/>
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
                <div class="swiper-button-next"></div>
            </div>
        )

        return (
            <div className={styles.HomePage}>
                <Slideshow className={styles.slider} />

                <h2 className={styles.genreheading}>Latest</h2>
                {trendingmoviesList}
                <h2 className={styles.genreheading}>Trending</h2>
                {trendingmoviesList}

                <h2 className={styles.genreheading}>Movie Genres</h2>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src={action} class="genreimage" alt="action" />
                        </div>
                        <div class="swiper-slide">
                            <img src={comedy} class="genreimage" alt="comedy" />
                        </div>
                        <div class="swiper-slide">
                            <img src={drama} class="genreimage" alt="drama" />
                        </div>
                        <div class="swiper-slide">
                            <img src={crime} class="genreimage" alt="crime" />
                        </div>
                        <div class="swiper-slide">
                            <img src={animated} class="genreimage" alt="animated" />
                        </div>
                        <div class="swiper-slide">
                            <img src={romance} class="genreimage" alt="romance" />
                        </div>
                        <div class="swiper-slide">
                            <img src={horror} class="genreimage" alt="horror" />
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>


                <h2 className={styles.genreheading}>Watch in your language</h2>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src={hindi} class="genreimage" alt="hindi" />
                        </div>
                        <div class="swiper-slide">
                            <img src={english} class="genreimage" alt="english" />
                        </div>
                        <div class="swiper-slide">
                            <img src={telugu} class="genreimage" alt="telugu" />
                        </div>
                        <div class="swiper-slide">
                            <img src={punjabi} class="genreimage" alt="punjabi" />
                        </div>

                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>

                <h2 className={styles.genreheading}>Your Recommendations</h2>
                <AllMovies />

            </div>
        )
    }
}

export default HomePage;