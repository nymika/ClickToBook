import React, {Component } from 'react';
import '../stylesheets/MovieDetailPage.css';
import deadpool from "../images/deadpool.jpg";

import {BrowserRouter} from 'react-router-dom';
import {NavLink,Route} from 'react-router-dom';
import MovieDetailSummary from "./MovieDetailSummary";

class MovieDetailPage extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <BrowserRouter>
            <div className="MovieDetail">

                <div className="Movieposterbox">
                    <img src={deadpool} alt="my movie poster" className="Movieposter"/>
                </div>

                <div className="Movie-info-box">
                    <h1 className="Movietitle">DEADPOOL</h1>
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
                    <Route path="/MovieDetail/" exact  component = {MovieDetailSummary} />
                    </div>
                </div>

            </div>
            </BrowserRouter>
        )
    }
}

export default MovieDetailPage