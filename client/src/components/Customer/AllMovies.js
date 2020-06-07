import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import styles from './stylesheets/HomePage.module.css'

import Movie from "./Movie";


class AllMovies extends Component {

    state = {
        // movies : [
        //     {id : 'Deadpool', Title : 'Deadpool', Poster : deadpool},
        //     {id : 'Alice', Title : 'Alice through the looking glass', Poster : alice },
        //     {id : 'HarryPotter', Title : 'HarryPotter', Poster : harrypotter},
        //     {id : 'FF', Title : 'Fast&Furious', Poster : FF},
        //     {id : 'Batman', Title : 'Batman', Poster : batman},
        //     {id : 'alpha', Title : 'Alpha Alert', Poster : alpha},
        //     {id : 'ASVR', Title : 'ASVR', Poster : deadpool}
        //     ]
        movies : []
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

    componentDidMount() {
        this.ShowMoviesAPIHandler();
    }

    render() {

        let moviesList = (
            <div className={styles.moviesList}>
                {
                    this.state.movies.map ( i => {
                        return (
                        <Link className = {styles.MovieIcons}
                              to={`/MovieDetailPage/${i._id}`} key={i._id} >
                            <Movie Title={i.title}
                               Poster={i.poster}/>
                        </Link>
                        )
                    })
                }
            </div>
        )

        return (
            <div >
                {moviesList}
            </div>
        )
    }
}

export default AllMovies