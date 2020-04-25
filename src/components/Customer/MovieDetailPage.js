import React, {Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route,Link} from 'react-router-dom';

import styles from './stylesheets/MovieDetailPage.module.css';
import MovieDetailReviewBox from "./MovieDetailReviewBox";
import ShowTheatres from "./ShowTheatres";

import deadpool from "./images/deadpool.jpg";
import alice from "./images/alice.jpg";
import harrypotter from "./images/deathly-hallows-p2-2.jpg";
import FF from "./images/fast-five-2.jpg";
import batman from "./images/batman-v-superman-dawn-of-justice-3.jpg";
import alpha from "./images/alpha-alert-1.jpg";

class MovieDetailPage extends Component {

    state = {
        movies : [
            {id : 'Deadpool', Title : 'Deadpool', Poster : deadpool, Summary : <div>
                <p className="Movie-Description">Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.</p>
                <p>Date of Release :</p>
                <p>Duration : </p>
                <p>Starring : Ryan Reynolds, Morena Baccarin, Ed Skrein, T. J. Miller</p>
                <p>Directed : Tim Miller</p>
            </div>},
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

    constructor(props) {
        super(props);
    }

    render() {
        var selectedMovieId = this.props.match.params.id;
        var selectedMovie = null;
        this.state.movies.filter( movie => {
            return (
                (movie.id === selectedMovieId)?
                    selectedMovie = movie : null
            )
            }
        );
        console.log(selectedMovie);

        return (
            <BrowserRouter>
                <div className = {styles.separateMoviePage}>
                <div className={styles.MovieDetail}>

                    <div className={styles.Movieposterbox}>
                        <img src={selectedMovie.Poster} alt="my movie poster" className={styles.Movieposter}/>
                    </div>

                    <div className={styles.Movieinfobox}>
                        <h1 className={styles.Movietitle}>{selectedMovie.Title}</h1>
                        <p className={styles.MovieGenre}>Genre</p>
                        <p>U , Language, 2D</p>
                        <div className={styles.Movieratingbox}>
                            <div className={styles.MovieRating}>
                                <p>3.9</p>
                                <p>User's Rating</p>
                            </div>
                            <div className={styles.MovieRating}>
                                <p>3.9</p>
                                <p>Critic's Rating</p>
                            </div>
                            <div className={styles.MovieRating}>
                                <input id="your-rating" type="text" />
                                <p>You rate it</p>
                            </div>
                        </div>
                        <Link to={this.props.match.url + '/ShowTheatres'} >
                        <button onClick= { () => window.scrollTo(0,500)} className={styles.Moviebookticket}>BOOK TICKETS</button>
                        </Link>
                        <div className={styles.Summaryreviewsheading}>
                            <ul className={styles.Summaryreviews}>
                                <Link className = {styles.SummaryLink} to = {this.props.match.url}><li className = {styles.summaryreviewslist}>Summary</li></Link>
                                <Link className = {styles.SummaryLink} to = {this.props.match.url + "/User's Reviews"}><li className = {styles.summaryreviewslist}>User's Reviews</li></Link>
                                <Link className = {styles.SummaryLink} to = {this.props.match.url + "/Critic's Reviews"}><li className = {styles.summaryreviewslist}>Critic's Reviews</li></Link>
                            </ul>
                        </div>

                        <div className={styles.Moviesummarybox}>
                            <Route path="/MovieDetailPage/:id" exact render = { () => selectedMovie.Summary}/>
                            <Route path="/MovieDetailPage/:id/User's Reviews" exact component={MovieDetailReviewBox} />
                            <Route path="/MovieDetailPage/:id/Critic's Reviews" exact component={MovieDetailReviewBox} />
                        </div>
                    </div>
                </div>
                    <Route path={this.props.match.url + "/ShowTheatres"} component = {ShowTheatres} />

                </div>
            </BrowserRouter>
        )
    }
}

export default MovieDetailPage