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
import animated from './images/homePage Slider Images/animatededited.jpg';
import romance from './images/homePage Slider Images/romanceedited.jpg';
import horror from './images/homePage Slider Images/horroredited.jpg';

import hindi from './images/homePage Slider Images/hindi.jpg';
import english from './images/homePage Slider Images/english.jpg';
import telugu from './images/homePage Slider Images/telugu.jpg';
import punjabi from './images/homePage Slider Images/punjabi.jpg';

import Slideshow from "./slider";
import AllMovies from './AllMovies';

import axios from 'axios';

class HomePage extends Component {

    state = {
        latest: [],
        trending: []
    }

    GetTrendingMovies() {
        axios.get('http://localhost:3000/')
            .then(response => {
                //console.log(response.data)
                this.setState({
                    latest: response.data.latestMovies,
                    trending: response.data.trendingMovies
                })
                console.log(this.state)
            }).catch((e) => alert(e))
    }
    componentDidMount() {
        this.GetTrendingMovies()
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
                        this.state.trending.map(i => {
                            return (
                                <div className={styles.slides}>
                                    <Link key={i._id}
                                        to={`/MovieDetailPage/${i._id}`}>
                                        <img src={i.poster} class="posterimage" alt="trendingmovie" onClick={() => window.scrollTo(0, 0)} />
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
                <div class="swiper-button-next"></div>
            </div>
        )

        let latestmoviesList = (
            <div class="swiper-container">
                <div class="swiper-wrapper">

                    {
                        this.state.latest.map(i => {
                            return (
                          //<div class="swiper-slide">
                                <div className={styles.slides}> 
                                    <Link key={i._id}
                                        to={`/MovieDetailPage/${i._id}`} >
                                        <img src={i.poster} class="posterimage " alt="latestmovie" onClick={() => window.scrollTo(0, 0)} />
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
                {latestmoviesList}
                <h2 className={styles.genreheading}>Trending</h2>
                {trendingmoviesList}

                <h2 className={styles.genreheading}>Movie Genres</h2>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <Link to='/Action'>
                                <img src={action} class="genreimage" alt="action" />
                            </Link>
                        </div>
                        <div class="swiper-slide">
                            <Link to='/Comedy'>
                                <img src={comedy} class="genreimage" alt="comedy" />
                            </Link>
                        </div>
                        <div class="swiper-slide">
                            <Link to='/Drama'>
                                <img src={drama} class="genreimage" alt="drama" />
                            </Link>
                        </div>
                        <div class="swiper-slide">
                            <Link to='/Crime'>
                                <img src={crime} class="genreimage" alt="crime" />
                            </Link>
                        </div>
                        <div class="swiper-slide">
                            <Link to='/Animated'>
                                <img src={animated} class="genreimage" alt="animated" />
                            </Link>
                        </div>
                        <div class="swiper-slide">
                            <Link to='/Romance'>
                                <img src={romance} class="genreimage" alt="romance" />
                            </Link>
                        </div>
                        <div class="swiper-slide">
                            <Link to='/Horror'>
                                <img src={horror} class="genreimage" alt="horror" />
                            </Link>
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>


                <h2 className={styles.genreheading}>Watch in your language</h2>
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <Link to='/Hindi'>
                                <img src={hindi} class="genreimage" alt="hindi" />
                            </Link>
                        </div>
                        <div class="swiper-slide">
                            <Link to='/English'>
                                <img src={english} class="genreimage" alt="english" />
                            </Link>
                        </div>
                        <div class="swiper-slide">
                            <Link to='/Telugu'>
                                <img src={telugu} class="genreimage" alt="telugu" />
                            </Link>
                        </div>
                        <div class="swiper-slide">

                            <img src={punjabi} class="genreimage" alt="punjabi" />
                        </div>

                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>

                {/* <h2 className={styles.genreheading}>Your Recommendations</h2> */}
                <AllMovies title="Recomendations for You" work="RecomendationHandler" />

            </div>
        )
    }
}

export default HomePage;