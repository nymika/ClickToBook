import React, { Component } from 'react';
import axios from 'axios';

import styles from './stylesheets/MovieListing.module.css';

import Movie from './Movie';

// import deadpool from "./images/deadpool.jpg";
// import alice from "./images/alice.jpg";
// import harrypotter from "./images/deathly-hallows-p2-2.jpg";
// import FF from "./images/fast-five-2.jpg";
// import batman from "./images/batman-v-superman-dawn-of-justice-3.jpg";
// import alpha from "./images/alpha-alert-1.jpg";
// import Axios from 'axios';

class MovieListing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            showMovies: true
        }
    }

    deleteMovieHandler = (movieIndex) => {
        const movies = [...this.state.movies];
        movies.splice(movieIndex, 1);
        this.setState({ movies: movies });
    }

    ShowMoviesAPIHandler = () => {
        axios.get('http://localhost:3001/getmovies')
            .then(response => {
                console.log('show movies done')
                this.setState({
                    movies: response.data
                });
                console.log(this.state.movies);
            }).catch((e) => alert(e));
    }

    componentDidMount() {
        this.ShowMoviesAPIHandler();
    }

    render() {
        let movies = null;
        if (this.state.showMovies) {
            movies =
                (
                    <div>
                        {this.state.movies.map((movie, index) => {
                            return (
                                [<Movie
                                    Title={movie.title}
                                    Poster={movie.poster}
                                    DateofRelease={movie.releaseDate}
                                    Duration={movie.runtime}
                                    Director={movie.director[0]}
                                    Starring={movie.actors}
                                    Genre={movie.genres} />,

                                <button className={styles.Delete}
                                    onClick={() => this.deleteMovieHandler(index)}>
                                    Delete</button>]
                            )
                        })}
                    </div>



                )
        }
        return (
            <div className={styles.MovieListing}>
                <h1 className={styles.heading}>Movie Listing : </h1>
                {movies}
            </div>
        )
    }
}

export default MovieListing;

// state = {
//     movies : [
//         {id : 'Deadpool', Title : 'Deadpool', Poster : deadpool,
//             DateofRelease : '2018',
//             Duration : '132 min',
//             Starring : 'Ryan Reynolds, Morena Baccarin, Ed Skrein, T. J. Miller',
//             Director : 'Tim Miller',
//             Genre : 'Action'},
//         {id : 'Alice', Title : 'Alice through the looking glass', Poster : alice, 

//             DateofRelease : '2018',
//             Duration : '132 min',
//             Starring : 'Ryan Reynolds, Morena Baccarin, Ed Skrein, T. J. Miller',
//             Director : 'Tim Miller',
//             Genre : 'Action'},
//         {id : 'HarryPotter', Title : 'HarryPotter', Poster : harrypotter,
//             DateofRelease : '2018',
//             Duration : '132 min',
//             Starring : 'Ryan Reynolds, Morena Baccarin, Ed Skrein, T. J. Miller',
//             Director : 'Tim Miller',
//             Genre : 'Action'
//         },
//         {id : 'FF', Title : 'Fast&Furious', Poster : FF,
//             DateofRelease : '2018',
//             Duration : '132 min',
//             Starring : 'Ryan Reynolds, Morena Baccarin, Ed Skrein, T. J. Miller',
//             Director : 'Tim Miller',
//             Genre : 'Action'
//     },
//         {id : 'Batman', Title : 'Batman', Poster : batman,
//             DateofRelease : '2018',
//             Duration : '132 min',
//             Starring : 'Ryan Reynolds, Morena Baccarin, Ed Skrein, T. J. Miller',
//             Director : 'Tim Miller',
//             Genre : 'Action'},
//         {id : 'alpha', Title : 'Alpha Alert', Poster : alpha,
//             DateofRelease : '2018',
//             Duration : '132 min',
//             Starring : 'Ryan Reynolds, Morena Baccarin, Ed Skrein, T. J. Miller',
//             Director : 'Tim Miller',
//             Genre : 'Action'},
//         {id : 'ASVR', Title : 'ASVR', Poster : deadpool,
//             DateofRelease : '2018',
//             Duration : '132 min',
//             Starring : 'Ryan Reynolds, Morena Baccarin, Ed Skrein, T. J. Miller',
//             Director : 'Tim Miller',
//             Genre : 'Action'}
//     ],
//     otherState : 'some other value',
//     showMovies : true
// }