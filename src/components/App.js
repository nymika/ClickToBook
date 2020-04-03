import React, {Component } from 'react';
import styles from '../stylesheets/App.module.css';
import {BrowserRouter, Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

import {Footer, Header} from './HeaderFooter';
import HomePage from './HomePage';
import MovieDetailPage from './MovieDetailPage';
import ShowTheatres from "./ShowTheatres";

class App extends Component {
  render() {
    return (
        <BrowserRouter>

        <div className={styles.App}>
            <Header />
            <div>
                <ul>
                    <li><Link to ="/">Home Page</Link></li>
                    <li><Link to ={{
                        pathname : '/MovieDetailPage/Deadpool'
                    }}>Movie Detail Page</Link></li>
                    <li><Link to = "/MovieDetailPage/Deadpool/ShowTheatres">Show Theatres</Link></li>
                </ul>
            </div>

            <Route path="/" exact component = {HomePage} />
            <Route path="/MovieDetailPage/:id" component = {MovieDetailPage } />
            <Footer />
        </div>

        </BrowserRouter>
        )
        }}


export default App;
