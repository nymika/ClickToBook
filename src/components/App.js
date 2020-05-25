import React, {Component } from 'react';
import {BrowserRouter, Link, Route,Switch} from 'react-router-dom';

import UserApp from "./Customer/UserApp";
import TheatreOwnerPage from "./Theatre Owner/TheatreOwnerPage"
import AdminPage from "./Admin/AdminPage"

class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <ul>
                    <li><Link to ="/CustomerPage">Customer</Link></li>
                    <li><Link to ={{
                                pathname : '/TheatreOwnerPage'
                            }}>Theatre Owner Page</Link></li>
                    <li><Link to = "/AdminPage">Admin Page</Link></li>
                </ul>
                <p>Parts left out are  linking genres to movies, search feature, location feature, login page, checkout page</p>
            </div>
            <Switch>
                <Route path="/TheatreOwnerPage" component = {TheatreOwnerPage } />
                <Route path="/AdminPage" component = {AdminPage} />
                <Route path="/CustomerPage" component = {UserApp} />
            </Switch>
                  
            </BrowserRouter>
        )
    }}


export default App;
