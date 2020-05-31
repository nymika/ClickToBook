import React, {Component } from 'react';
import {Route} from 'react-router-dom';

import styles from './stylesheets/App.module.css';

import {Footer, Header} from './HeaderFooter';
import HomePage from './HomePage';
import MovieDetailPage from './MovieDetailPage';
import MyProfile from './MyProfile';
import UserLogin from './userLogin';
import UserSignUp from './userSignup';

//import {callAPI} from '../services/auth.services'

class UserApp extends Component {
    render() {
        return (
            <div className={styles.App}>
                    <Header />
                    {/* <div>
                        <ul>
                            <li><Link to ="/">Home Page</Link></li>
                            <li><Link to ={{
                                pathname : '/MovieDetailPage/Deadpool'
                            }}>Movie Detail Page</Link></li>
                            <li><Link to = "/MovieDetailPage/Deadpool/ShowTheatres">Show Theatres</Link></li>
                            <li><Link to ="/MyProfile"> My Profile Page</Link></li>
                            <li><Link to ="/userLogin"> User Login</Link></li>
                            <li><Link to ="/andsign"> User Signup</Link></li>
                        </ul>
                    </div> */}
                    {/* <button onClick={() => callAPI()}>click moee</button> */
                    <Route path="/" exact component = {HomePage} /> }
                    <Route path="/MovieDetailPage/:id" component = {MovieDetailPage } />
                    <Route path="/userLogin" exact component = {UserLogin} />
                    <Route path="/userSignup" component = {UserSignUp} />
                    <Route path="/MyProfile" component = {MyProfile} />
                    <Footer />
                </div>
        )
    }}


export default UserApp;
