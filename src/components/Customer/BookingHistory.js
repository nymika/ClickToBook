import React, {Component } from 'react';
//import {BrowserRouter, Link, Route} from 'react-router-dom';

import styles from './stylesheets/MyProfile.module.css'

class BookingHistory extends Component {
    render() {
        return (
            <div className = {styles.profileBox}>
                <p>You don't seem to have any bookings done in the past</p>
            </div>
        )
    }
}

export default BookingHistory;