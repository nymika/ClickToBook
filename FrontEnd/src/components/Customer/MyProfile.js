import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import styles from './stylesheets/MyProfile.module.css';
import UpdateProfile from './UpdateProfile';
import BookingHistory from './BookingHistory'

class MyProfile extends Component {
    render() {
        return (
                <div className={styles.ProfilePage}>
                    <div className={styles.Summaryreviewsheading}>
                        <ul className={styles.Summaryreviews}>
                            <Link className={styles.SummaryLink} to={this.props.match.url + "/BookingHistory"}><li className={styles.summaryreviewslist}>Booking History</li></Link>
                            <Link className={styles.SummaryLink} to={this.props.match.url}><li className={styles.summaryreviewslist}>Update Profile</li></Link>
                        </ul>
                    </div>

                    <div className={styles.Moviesummarybox}>
                        <Route path="/MyProfile/BookingHistory" exact component={BookingHistory} />
                        <Route path="/MyProfile" exact component={UpdateProfile} />
                    </div>
                </div>
        )
    }
}
export default MyProfile;