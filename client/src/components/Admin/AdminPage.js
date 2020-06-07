import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import styles from './stylesheets/App.module.css'

import UserLogout from '../Customer/userLogout';
import MyProfile from '../Customer/MyProfile';

import { Header, Footer } from './HeaderFooter'
import Grid from './Grid';

class AdminPage extends Component {
    render() {
        return (
            <div className={styles.App}>
                <Header />
                <Route path="/" exact component={Grid} />
                <Route path="/MyProfile" component={MyProfile} />
                <Route path="/userLogout" exact component={UserLogout} />
                <Footer />
            </div>
        )
    }
}

export default AdminPage;