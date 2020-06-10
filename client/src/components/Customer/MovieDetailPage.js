import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import axios from 'axios';

import styles from './stylesheets/MovieDetailPage.module.css';
import MovieDetailReviewBox from "./MovieDetailReviewBox";
import ShowTheatres from "./ShowTheatres";
import tick from './images/tick.png';

class MovieDetailPage extends Component {

    state = {
        selectedMovie: {},
        yourRating: '',
        currentUser: {},
        BookTickets: false
    }

    safelyParseJSON = (json) => {
        var parsed
        try {
            parsed = JSON.parse(json)
        } catch (e) {
            // Oh well, but whatever...
        }
        return parsed // Could be undefined!
    }

    GetMovieDetailAPIHandler = (movieId, user) => {
        var body = {
            _user: ''
        }
        if (user) {
            body = {
                _user: user._id
            }
        }
        //console.log(body)

        axios.put(`http://localhost:3000/movie/${movieId}`, body)
            .then(response => {
                //console.log(response.data)
                this.setState({
                    selectedMovie: response.data.movie,
                    yourRating : response.data.userRating.rate
                });
            }).catch((e) => alert(e));
    }

    updateUserRatingState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    UserUpdateAPIHandler = (e) => {
        const inputBody = {
            _id: this.state.currentUser._id,
            rate: this.state.yourRating,
            movieId: this.props.match.params.id
        }
        //console.log(inputBody)
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        axios.put(`http://localhost:3000/addrating/${this.props.match.params.id}`, inputBody)
            .then(response => {
                console.log(response)
            }).catch((e) => alert(e))

    }

    BookTickets() {
        this.setState({
            BookTickets: true
        })
        window.scrollTo(0, 500)
    }

    componentDidMount() {
        var selectedMovieId = this.props.match.params.id;
        const currentUserStorage = localStorage.getItem("currentUser");
        const currentUser = this.safelyParseJSON(currentUserStorage);
        this.setState({
            currentUser: currentUser
        })
        //console.log(selectedMovieId, currentUser)
        this.GetMovieDetailAPIHandler(selectedMovieId, currentUser)
    }

    render() {
        // var selectedMovieId = this.props.match.params.id;
        // var selectedMovie = null;
        // this.state.movies.filter(movie => {
        //     return (
        //         (movie._id === selectedMovieId) ?
        //             selectedMovie = movie : null
        //     )
        // }
        // );
        //console.log(selectedMovie);
        //console.log('Movie Detail Page Opened!')
        if (this.state.selectedMovie) {
            return (
                <div className={styles.separateMoviePage}>
                    <div className={styles.MovieDetail}>

                        <div className={styles.Movieposterbox}>
                            <img src={this.state.selectedMovie.poster} alt="my movie poster" className={styles.Movieposter} />
                        </div>

                        <div className={styles.Movieinfobox}>
                            <h1 className={styles.Movietitle}>{this.state.selectedMovie.title}</h1>
                            <h3 className={styles.MovieGenre}>{this.state.selectedMovie.genres}</h3>
                            <h4>U , {this.state.selectedMovie.language} , 2D</h4>
                            <div className={styles.Movieratingbox}>
                                <div className={styles.MovieRating}>
                                    <p>{this.state.selectedMovie.rating}</p>
                                    <p>User's Rating</p>
                                </div>
                                <div className={styles.MovieRating}>
                                    <p>{this.state.selectedMovie.rating}</p>
                                    <p>Critic's Rating</p>
                                </div>
                                {(this.state.currentUser) ?
                                    <div className={styles.MovieRating}>
                                        <input className={styles.yourrating} type="text" typeholder="out of 5"
                                            value={this.state.yourRating} onChange={this.updateUserRatingState} name='yourRating' />
                                        <button type="submit" onClick={() => this.UserUpdateAPIHandler()}><img className={styles.tick} src={tick} alt="submit" /></button>
                                        <p>You rate it</p>
                                    </div> : null}
                            </div>
                            <button onClick={() => this.BookTickets()} className={styles.Moviebookticket}>BOOK TICKETS</button>
                            <div className={styles.Summaryreviewsheading}>
                                <ul className={styles.Summaryreviews}>
                                    <NavLink className={styles.SummaryLink} to={this.props.match.url}
                                        activeStyle={{
                                            "borderBottom": "2px solid #4e5565",
                                            "color": "#282c34",
                                            "backgroundColor": "white"
                                        }}><li className={styles.summaryreviewslist}>Summary</li></NavLink>
                                    <NavLink className={styles.SummaryLink} to={this.props.match.url + "/User's Reviews"}
                                        activeStyle={{
                                            "borderBottom": "2px solid #4e5565",
                                            "color": "white",
                                            "backgroundColor": "#282c34"
                                        }}><li className={styles.summaryreviewslist}>User's Reviews</li></NavLink>
                                    <NavLink className={styles.SummaryLink} to={this.props.match.url + "/Critic's Reviews"}
                                        activeStyle={{
                                            "borderBottom": "2px solid #4e5565",
                                            "color": "white",
                                            "backgroundColor": "#282c34"
                                        }}><li className={styles.summaryreviewslist}>Critic's Reviews</li></NavLink>
                                </ul>
                            </div>

                            <div className={styles.Moviesummarybox}>
                                <Route path="/MovieDetailPage/:id" exact render={() =>
                                    <div>
                                        <p className="Movie-Description">{this.state.selectedMovie.synopsis}</p>
                                        <p>Date of Release : {this.state.selectedMovie.releaseDate} </p>
                                        <p>Duration : {this.state.selectedMovie.runtime} </p>
                                        <p>Starring : {this.state.selectedMovie.actors}</p>
                                        <p>Directed : {this.state.selectedMovie.director}</p>
                                    </div>} />
                                <Route path="/MovieDetailPage/:id/User's Reviews" exact component={MovieDetailReviewBox} />
                                <Route path="/MovieDetailPage/:id/Critic's Reviews" exact component={MovieDetailReviewBox} />
                            </div>
                        </div>
                    </div>
                    {(this.state.BookTickets) ?
                        <ShowTheatres movieId={this.state.selectedMovie._id} /> : null}

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