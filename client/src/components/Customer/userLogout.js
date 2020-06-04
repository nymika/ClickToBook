import React, { Component } from 'react';
import axios from 'axios';
import styles from './stylesheets/userLogin.module.css';

class UserLogout extends Component {
    constructor(props) {
        super(props);
        const currentUserStorage = localStorage.getItem("currentUser");
        const token = localStorage.getItem("token")
        this.safelyParseJSON = this.safelyParseJSON.bind(this)
        const currentUser = this.safelyParseJSON(currentUserStorage)
        this.state = {
            currentUser: currentUser,
            usertoken: token
        };
        this.UserLogoutAPIHandler = this.UserLogoutAPIHandler.bind(this);
    }

    safelyParseJSON = (json) => {
        var parsed
        try {
            parsed = JSON.parse(json)
        } catch (e) {
            // Oh well, but whatever...
        }
        return parsed // Could be undefined!
    }

    UserLogoutAPIHandler = () => {
        const user = {
            // email: this.state.currentUser.email,
            // _id : this.state.currentUser._id,
            // token : this.state.usertoken
        };
        // localStorage.removeItem("currentUser");
        //         localStorage.removeItem("token")
        // , {headers : {authorization: `bearer ${localStorage.getItem("token")}` }}
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token")
        console.log('token is', localStorage.getItem("token"));
        axios.post('http://localhost:3001/users/logout', user)
            .then(response => {
                console.log(response.data)
                localStorage.removeItem("currentUser");
                localStorage.removeItem("token");
                this.props.history.replace('/');
            }).catch((e) => alert(e));
    }

    render() {
        return (
            <div className={styles.logoutbox}>
                <h2 className={styles.heading}>Do you want to log out?</h2>
                <button type="submit" className={styles.submitbtn} onClick={this.UserLogoutAPIHandler}>LOGOUT</button>
            </div>
        )
    }
}
export default UserLogout;