import React from 'react';
import "../stylesheets/Movie.css";

const Movie = (props) => (
            <div className="movie">
                <div >
                    <img src={props.Poster} alt="my movie poster" className="poster"/>
                </div>
                <div className="title-year">
                    <h3 className="title">{props.Title}</h3>
                    <h4 className="year">YEAR {props.Year}</h4>
                </div>
            </div>
        );
export default Movie;