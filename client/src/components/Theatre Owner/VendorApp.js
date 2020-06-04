import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import UserLogout from '../Customer/userLogout';
import UserDelete from '../Customer/userDelete';
import MyProfile from '../Customer/MyProfile';

import { Header, Footer } from './HeaderFooter'
import Grid from './Grid';

class VendorApp extends Component {
    render() {
        return (
            <div>
                <Header />
                <Route path="/" exact component={Grid} />
                <Route path="/MyProfile" component={MyProfile} />
                <Route path="/userLogout" exact component={UserLogout} />
                <Route path="/userDelete" exact component={UserDelete} />
                <Footer />
            </div>
        )
    }
}

export default VendorApp;