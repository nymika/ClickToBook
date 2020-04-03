import React, {Component } from 'react';
import styles from '../stylesheets/HomePage.module.css';

import Slideshow from "./slider";
import AllMovies from "./AllMovies";
import $ from "jquery";

class HomePage extends Component {
    componentDidMount() {
        console.log(this.props);
        $(".lang-filter-heading").click(function(){
            $(".lang-filter").slideToggle();
        });

        $(".genre-filter-heading").click(function(){
            $(".genre-filter").slideToggle();
        });
    }
    render() {
        return (
            <div className={styles.HomePage}>
                <Slideshow className={styles.slider}/>

                <div className={styles.movieslist}>
                    <h2>Movies :</h2>
                    <ul className={styles.movie_categories}>
                        <li className={styles.movie_categories_list}>
                            <a id="now-showing-btn"
                               data-toggle="#now-showing"
                               onClick ="$('.search-pagewise').show();" >
                                Now Showing
                            </a>
                        </li>
                        <li className={styles.movie_categories_list}>Coming Soon</li>
                        <li className={styles.movie_categories_list}>Exclusive</li>
                    </ul>

                    <div className={styles.box_filter}>



                    </div>
                </div>
                <AllMovies />

            </div>
           )
        }
}

    export default HomePage;