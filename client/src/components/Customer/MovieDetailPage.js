import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import axios from 'axios';

import styles from './stylesheets/MovieDetailPage.module.css';
import MovieDetailReviewBox from "./MovieDetailReviewBox";
import ShowTheatres from "./ShowTheatres";
import tick from './images/tick.png';

// import deadpool from "./images/deadpool.jpg";
// import alice from "./images/alice.jpg";
// import harrypotter from "./images/deathly-hallows-p2-2.jpg";
// import FF from "./images/fast-five-2.jpg";
// import batman from "./images/batman-v-superman-dawn-of-justice-3.jpg";
// import alpha from "./images/alpha-alert-1.jpg";

class MovieDetailPage extends Component {

    state = {
        movies: []
    }

    ShowMoviesAPIHandler = () => {
        axios.get('http://localhost:3001/getmovies')
            .then(response => {
                this.setState({
                    movies: response.data
                });
            }).catch((e) => alert(e));
    }

    componentDidMount() {
        this.ShowMoviesAPIHandler();
    }

    render() {
        var selectedMovieId = this.props.match.params.id;
        var selectedMovie = null;
        this.state.movies.filter(movie => {
            return (
                (movie._id === selectedMovieId) ?
                    selectedMovie = movie : null
            )
        }
        );
        console.log(selectedMovie);
        if (selectedMovie) {
            return (
                <div className={styles.separateMoviePage}>
                    <div className={styles.MovieDetail}>

                        <div className={styles.Movieposterbox}>
                            <img src={selectedMovie.poster} alt="my movie poster" className={styles.Movieposter} />
                        </div>

                        <div className={styles.Movieinfobox}>
                            <h1 className={styles.Movietitle}>{selectedMovie.title}</h1>
                            <h3 className={styles.MovieGenre}>{selectedMovie.genres}</h3>
                            <h4>U , {selectedMovie.language} , 2D</h4>
                            <div className={styles.Movieratingbox}>
                                <div className={styles.MovieRating}>
                                    <p>{selectedMovie.rating}</p>
                                    <p>User's Rating</p>
                                </div>
                                <div className={styles.MovieRating}>
                                    <p>{selectedMovie.rating}</p>
                                    <p>Critic's Rating</p>
                                </div>
                                <div className={styles.MovieRating}>
                                    <input className={styles.yourrating} type="text" typeholder="out of 5" />
                                    <button type="submit"><img className={styles.tick} src={tick} alt="submit" /></button>
                                    <p>You rate it</p>
                                </div>
                            </div>
                            <Link to={this.props.match.url + '/ShowTheatres'} >
                                <button onClick={() => window.scrollTo(0, 500)} className={styles.Moviebookticket}>BOOK TICKETS</button>
                            </Link>
                            <div className={styles.Summaryreviewsheading}>
                                <ul className={styles.Summaryreviews}>
                                    <Link className={styles.SummaryLink} to={this.props.match.url}><li className={styles.summaryreviewslist}>Summary</li></Link>
                                    <Link className={styles.SummaryLink} to={this.props.match.url + "/User's Reviews"}><li className={styles.summaryreviewslist}>User's Reviews</li></Link>
                                    <Link className={styles.SummaryLink} to={this.props.match.url + "/Critic's Reviews"}><li className={styles.summaryreviewslist}>Critic's Reviews</li></Link>
                                </ul>
                            </div>

                            <div className={styles.Moviesummarybox}>
                                <Route path="/MovieDetailPage/:id" exact render={() =>
                                    <div>
                                        <p className="Movie-Description">{selectedMovie.synopsis}</p>
                                        <p>Date of Release : {selectedMovie.releaseDate} </p>
                                        <p>Duration : {selectedMovie.runtime} </p>
                                        <p>Starring : {selectedMovie.actors}</p>
                                        <p>Directed : {selectedMovie.director}</p>
                                    </div>} />
                                <Route path="/MovieDetailPage/:id/User's Reviews" exact component={MovieDetailReviewBox} />
                                <Route path="/MovieDetailPage/:id/Critic's Reviews" exact component={MovieDetailReviewBox} />
                            </div>
                        </div>
                    </div>
                    <Route path={this.props.match.url + "/ShowTheatres"} component={ShowTheatres} />

                </div>
            )
        }
        else
            return (
                <h1>Loading</h1>
            )
    }
}

export default MovieDetailPage