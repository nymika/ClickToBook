import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import AddMovie from './AddMovie';
// import AddTheatre from './AddTheatre';
// import AddShow from './AddShow';
import MovieListing from './MovieListing';
import TheatreListing from './TheatreListing';
// import Subscription from './Subscription';

import styles from './stylesheets/grid.css';

class Grid extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <h2 className={styles.welcome}>Welcome Admin,</h2>
                </div>

                <div class="grid-container">
                    <div class="grid-item"><Link to="/AM">Add Movie</Link></div>
                    {/* <div class="grid-item"><Link to="/AT">Add Theatre</Link></div> */}
                    {/* <div class="grid-item"><Link to="/AS">Add Show</Link></div> */}
                    <div class="grid-item"><Link to="/ML">Movie Listing</Link></div>
                    <div class="grid-item"><Link to="/TL">Theatre Listing</Link></div>
                    {/* <div class="grid-item"><Link to="/Sub">Your Subscription</Link></div> */}
                </div>

                <Route path="/AM" exact component={AddMovie} />
                {/* <Route path="/AT" exact component={AddTheatre} /> */}
                {/* <Route path="/AS" exact component={AddShow} /> */}
                <Route path="/ML" exact component={MovieListing} />
                <Route path="/TL" component={TheatreListing} />
                {/* <Route path="/Sub" exact component={Subscription} /> */}
            </BrowserRouter>
        )
    }
}

export default Grid;