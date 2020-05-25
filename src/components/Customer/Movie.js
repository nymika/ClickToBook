import React from 'react';
import styles from "./stylesheets/Movie.module.css";

const Movie = (props) => (
            <div className={styles.movie}>
                <div >
                    <img src={props.Poster} alt="my movie poster" className={styles.poster}/>
                </div>
                <div className={styles.title_year}>
                    <h4>{props.Title}  -  {props.Year}</h4>
                    {/* <h3 className={styles.title}>{props.Title}</h3>
                    <p className={styles.year}>Year{props.Year}</p> */}
                </div>
            </div>
        );
export default Movie;