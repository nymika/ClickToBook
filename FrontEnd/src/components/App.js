import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import UserApp from "./Customer/UserApp";
import TheatreOwnerPage from "./Theatre Owner/TheatreOwnerPage"
import AdminPage from "./Admin/AdminPage"
//import {callAPI} from './services/auth.services'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI = () => {
        fetch("http://localhost:3001/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentDidMount() {
        const res = this.callAPI();
        this.setState({ apiResponse: res })
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <p className="App-intro">HI  {this.state.apiResponse}</p>
                    <ul>
                        <li><Link to="/">Customer</Link></li>
                        <li><Link to={{
                            pathname: '/TheatreOwnerPage'
                        }}>Theatre Owner Page</Link></li>
                        <li><Link to="/AdminPage">Admin Page</Link></li>
                    </ul>


                    {/* <button onClick = { () => {
                    callAPI().then( res=> {
                    this.setState({ apiResponse: res }),
                    console.log(this.state.apiResponse) })}}>click me</button> */}


                    <p>Parts left out are  linking genres to movies, search feature, location feature, login page, checkout page</p>
                </div>
                <Switch>
                    <Route path="/TheatreOwnerPage" component={TheatreOwnerPage} />
                    <Route path="/AdminPage" component={AdminPage} />
                    <Route path="/" component={UserApp} />
                </Switch>
            </BrowserRouter>
        )
    }
}


export default App;
