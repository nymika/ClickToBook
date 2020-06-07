import React from 'react';
import styles from "./stylesheets/Movie.module.css";

const Movie = (props) => (
            <div className={styles.movie}>
                <div >
                    <img src={props.Poster} alt="my movie poster" className={styles.poster}/>
                    <span className = {styles.Genre}>{props.Genre}</span>
                    <br></br>
                    <h3 className={styles.title}>Title : {props.Title}</h3>
                    


                    <h3 className={styles.year}> Year Released : {props.DateofRelease}</h3>
                    <h3 className = {styles.Duration}>Duration :{props.Duration}</h3>
                    <p className = {styles.cast}>Directed By : {props.Director}</p>     
                    <p className = {styles.cast}>Starring : {props.Starring}</p>
                </div>
                </div>
            
        );
export default Movie;