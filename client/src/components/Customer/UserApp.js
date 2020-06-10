import React, {Component } from 'react';
import {Route} from 'react-router-dom';

import styles from './stylesheets/App.module.css';

import {Footer, Header} from './HeaderFooter';
import HomePage from './HomePage';
import MovieDetailPage from './MovieDetailPage';
import MyProfile from './MyProfile';
import UserLogin from './userLogin';
import UserSignUp from './userSignup';
import UserLogout from './userLogout';
import UserDelete from './userDelete';
import AllMovies from './AllMovies';

class UserApp extends Component {
    render() {
        return (
            <div className={styles.App}>
                    <Header />
                    <Route path="/" exact component = {HomePage} />
                    <Route path="/MovieDetailPage/:id" component = {MovieDetailPage } />
                    <Route path="/userLogin" exact component = {UserLogin} />
                    <Route path="/userSignup" component = {UserSignUp} />
                    <Route path="/MyProfile" component = {MyProfile} />
                    <Route path="/userLogout" exact component = {UserLogout} />
                    <Route path="/userDelete" exact component = {UserDelete} />

                    <Route path='/Search' exact render={ () => <AllMovies title='Search Movies' language='' genre=''/>} />

                    <Route path='/Telugu' exact render={ () => <AllMovies title='Telugu Movies' language='Telugu' genre=''/>} />
                    <Route path='/English' exact render={ () => <AllMovies title='English Movies' language='English' genre=''/>} />
                    <Route path='/Hindi' exact render={ () => <AllMovies title='Hindi Movies' language='Hindi' genre=''/>} />
                    <Route path='/Action' exact render={ () => <AllMovies title='Action Movies' language='' genre='Action'/>} />
                    <Route path='/Comedy' exact render={ () => <AllMovies title='Comedy Movies' language='' genre='Comedy'/>} />
                    <Route path='/Drama' exact render={ () => <AllMovies title='Drama Movies' language='' genre='Drama'/>} />
                    <Route path='/Crime' exact render={ () => <AllMovies title='Crime Movies' language='' genre='Crime'/>} />
                    <Route path='/Animated' exact render={ () => <AllMovies title='Animated Movies' language='' genre='Animated'/>} />
                    <Route path='/Romance' exact render={ () => <AllMovies title='Romance Movies' language='' genre='Romance'/>} />
                    <Route path='/Horror' exact render={ () => <AllMovies title='Horror Movies' language='' genre='Horror'/>} />
                    
                    <Footer />
                </div>
        )
    }}


export default UserApp;
