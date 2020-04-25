import React, {Component } from 'react';
import styles from './stylesheets/HomePage.module.css';

import Slideshow from "./slider";
import AllMovies from "./AllMovies";

class HomePage extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div className={styles.HomePage}>
                <Slideshow className={styles.slider}/>

                <div className={styles.movieslist}>
                    <h2>Movies :</h2>
                </div>
                <AllMovies />
            </div>
           )
        }
}

export default HomePage;