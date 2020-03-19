import React, {Component } from 'react';
import '../stylesheets/App.css';
import {BrowserRouter, Link} from 'react-router-dom';
import {Route} from 'react-router-dom';

import {Footer, Header} from './HeaderFooter';
import HomePage from './HomePage';
import MovieDetailPage from './MovieDetailPage';

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
                        pathname : '/MovieDetail'
                    }}>Movie Detail Page</Link></li>
                </ul>
            </div>

            <Route path="/Home" exact component = {HomePage} />
            <Route path="/MovieDetail" exact component = {MovieDetailPage} />
            <Footer />
        </div>

        </BrowserRouter>
        )
        }}


export default App;
