import React, {Component } from 'react';
import styles from '../stylesheets/HomePage.module.css';
import {Link} from 'react-router-dom';

import Movie from "./Movie";
import deadpool from "../images/deadpool.jpg";
import alice from "../images/alice.jpg";
import harrypotter from "../images/deathly-hallows-p2-2.jpg";
import FF from "../images/fast-five-2.jpg";
import batman from "../images/batman-v-superman-dawn-of-justice-3.jpg";
import alpha from "../images/alpha-alert-1.jpg";


class AllMovies extends Component {

    state = {
        movies : [
            {id : 'Deadpool', Title : 'Deadpool', Poster : deadpool},
            {id : 'Alice', Title : 'Alice through the looking glass', Poster : alice },
            {id : 'HarryPotter', Title : 'HarryPotter', Poster : harrypotter},
            {id : 'FF', Title : 'Fast&Furious', Poster : FF},
            {id : 'Batman', Title : 'Batman', Poster : batman},
            {id : 'alpha', Title : 'Alpha Alert', Poster : alpha},
            {id : 'ASVR', Title : 'ASVR', Poster : deadpool}
            ]
    }

    componentDidMount() {
        console.log(this.props);
    }


    render() {

        let moviesList = (
            <div className={styles.moviesList}>
                {
                    this.state.movies.map ( i => {
                        return (
                        <Link className = {styles.MovieIcons}
                              to={`/MovieDetailPage/${i.id}`} key={i.id} >
                            <Movie Title={i.Title}
                               Poster={i.Poster}/>
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