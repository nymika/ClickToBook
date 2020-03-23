import React, {Component } from 'react';
import '../stylesheets/MovieDetailPage.css';
import deadpool from "../images/deadpool.jpg";

import {BrowserRouter} from 'react-router-dom';
import {NavLink,Route} from 'react-router-dom';
import MovieDetailReviewBox from "./MovieDetailReviewBox";
import alice from "../images/alice.jpg";
import harrypotter from "../images/deathly-hallows-p2-2.jpg";
import FF from "../images/fast-five-2.jpg";
import batman from "../images/batman-v-superman-dawn-of-justice-3.jpg";
import alpha from "../images/alpha-alert-1.jpg";

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
                (movie.id == selectedMovieId)?
                    selectedMovie = movie : null
            )
            }
        );
        console.log(selectedMovie);

        return (
            <BrowserRouter>
                <div className="MovieDetail">

                    <div className="Movieposterbox">
                        <img src={selectedMovie.Poster} alt="my movie poster" className="Movieposter"/>
                    </div>

                    <div className="Movie-info-box">
                        <h1 className="Movietitle">{selectedMovie.Title}</h1>
                        <p className="Movie-Genre">Genre</p>
                        <p>U , Language, 2D</p>
                        <div className="Movie-rating-box">
                            <div className="Movie-Rating">
                                <p>3.9</p>
                                <p>User's Rating</p>
                            </div>
                            <div className="Movie-Rating">
                                <p>3.9</p>
                                <p>Critic's Rating</p>
                            </div>
                            <div className="Movie-Rating">
                                <input id="your-rating" type="text" />
                                <p>You rate it</p>
                            </div>
                        </div>
                        <button className="Movie-book-ticket">BOOK TICKETS</button>
                        <div className="Summary-reviews-heading">
                            <ul>
                                <li><NavLink to = {{
                                    pathname : this.props.match.url}
                                }>Summary</NavLink></li>
                                <li><NavLink to = {{
                                    pathname : this.props.match.url + "/User's Reviews"}
                                }>User's Reviews</NavLink></li>
                                <li><NavLink to = {{
                                    pathname : this.props.match.url + "/Critic's Reviews"}
                                }>Critic's Reviews</NavLink></li>
                            </ul>
                        </div>

                        <div className="Movie-summary-box">
                            <Route path="/MovieDetailPage/:id" exact render = { () => selectedMovie.Summary}/>
                            <Route path="/MovieDetailPage/:id/User's Reviews" exact component={MovieDetailReviewBox} />
                            <Route path="/MovieDetailPage/:id/Critic's Reviews" exact component={MovieDetailReviewBox} />
                        </div>
                    </div>
                        </div>
            </BrowserRouter>
        )
    }
}

export default MovieDetailPage