import React, {Component } from 'react';
import {BrowserRouter, Link, Route} from 'react-router-dom';

import styles from './stylesheets/App.module.css';

import {Footer, Header} from './HeaderFooter';
import HomePage from './HomePage';
import MovieDetailPage from './MovieDetailPage';
import MyProfile from './MyProfile';

class UserApp extends Component {
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
                            <li><Link to ="/MyProfile"> My Profile Page</Link></li>
                        </ul>
                    </div>

                    <Route path="/" exact component = {HomePage} />
                    <Route path="/MovieDetailPage/:id" component = {MovieDetailPage } />
                    <Route path="/MyProfile" component = {MyProfile} />
                    <Footer />
                </div>

            </BrowserRouter>
        )
    }}


export default UserApp;
