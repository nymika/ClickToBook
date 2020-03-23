import React, {Component } from 'react';
import '../stylesheets/App.css';
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

        <div className="App">
            <Header />
            <div>
                <ul>
                    <li><Link to ="/Home">Home Page</Link></li>
                    <li><Link to ={{
                        pathname : '/MovieDetailPage'
                    }}>Movie Detail Page</Link></li>
                    <li><Link to = "ShowTheatres">Show Theatres</Link></li>
                </ul>
            </div>

            <Route path="/" exact component = {HomePage} />
            <Route path="/MovieDetailPage/:id" component = {MovieDetailPage } />
            <Route path="/ShowTheatres" component = {ShowTheatres} />
            <Footer />
        </div>

        </BrowserRouter>
        )
        }}


export default App;
