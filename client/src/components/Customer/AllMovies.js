import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './stylesheets/HomePage.module.css'
import tick from './images/tick.png';

import Movie from "./Movie";



class AllMovies extends Component {

    state = {
        movies: [],
        // title: '',
        // work: ''
        title: this.props.title,
        language: this.props.language,
        genre: this.props.genre,
        text: ''
    }

    ShowMoviesAPIHandler = () => {
        axios.get('http://localhost:3000/getmovies')
            .then(response => {
                // console.log('show movies done')
                this.setState({
                    movies: response.data
                });
                // console.log(this.state.movies);
            }).catch((e) => alert(e));

    }

    SearchMoviesAPIHandler() {
        axios.put('http://localhost:3000/search', { text: this.state.text })
            .then(response => {
                this.setState({
                    movies: response.data
                });
                console.log(this.state.movies);
            }).catch((e) => alert(e));
    }

    ShowLanguageMoviesAPIHandler() {
        console.log(this.state)
        axios.put('http://localhost:3000/language', {
            language: this.state.language
        })
            .then(response => {
                console.log(response.data)
                this.setState({
                    movies: response.data
                })
            }).catch((e) => alert(e));
    }

    ShowGenreMoviesAPIHandler() {
        axios.put('http://localhost:3000/genre', {
            genre: this.state.genre
        })
            .then(response => {
                console.log(response.data)
                this.setState({
                    movies: response.data
                })
            }).catch((e) => alert(e));
    }

    componentDidMount() {
        //console.log(this.state)
        if (this.state.title === 'Recomendations for You') {
            this.ShowMoviesAPIHandler();
        }
        else if (this.state.title === 'Search Movies') {
            console.log('searching!')
            this.SearchMoviesAPIHandler();
        }
        else if (this.state.language) {
            this.ShowLanguageMoviesAPIHandler();
        }
        else if(this.state.genre) {
            this.ShowGenreMoviesAPIHandler();
        }
    }

    updateUserState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    SubmitSearchQuery = () => {
        this.SearchMoviesAPIHandler()
    }

    render() {
        var moviesList = (
            <h1>No movies are added here.</h1>
        )

        if (this.state.movies) {
            moviesList = (
                <div className={styles.moviesList}>
                    {
                        this.state.movies.map(i => {
                            return (
                                <Link className={styles.MovieIcons}
                                    to={`/MovieDetailPage/${i._id}`} key={i._id} >
                                    <Movie Title={i.title}
                                        Poster={i.poster} />
                                </Link>
                            )
                        })
                    }
                </div>
            )
        }

        return (
            <div >
                <h2 className={styles.heading}>{this.state.title}</h2>
                {
                    (this.state.title === 'Search Movies') ?
                        <div>
                            <input type='text' name='text' value={this.state.text}
                                onChange={this.updateUserState}
                                placeholder='enter partial Movie Name' />
                            <button type="submit" onClick={() => this.SubmitSearchQuery()}><img className={styles.tick} src={tick} alt="submit" /></button>

                        </div> : null
                }
                {moviesList}
            </div>
        )
    }
}

export default AllMovies