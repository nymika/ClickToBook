import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import styles from './stylesheets/MyProfile.module.css';
import UpdateProfile from './UpdateProfile';
// import BookingHistory from './BookingHistory'

class MyProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userType: ""
        };
        this.safelyParseJSON = this.safelyParseJSON.bind(this)
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

    componentDidMount() {
        const currentUserStorage = localStorage.getItem("currentUser");
        const currentUser = this.safelyParseJSON(currentUserStorage);
        if (currentUser) {
            this.setState({ userType: currentUser.userType })
        }
    }

    render() {
        if (this.state.userType === 'vendor')
            return (
                <div className={styles.ProfilePage}>
                    <div className={styles.Moviesummarybox}>
                        <Route path="/MyProfile" exact component={UpdateProfile} />
                        <div>
                            <Link to='/userDelete'>
                                <button type="submit" className={styles.submitbtn}>Delete Account</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        else if (this.state.userType === 'admin')
            return (
                <div className={styles.ProfilePage}>
                    <div className={styles.Moviesummarybox}>
                        <Route path="/MyProfile" exact component={UpdateProfile} />
                    </div>
                </div>
            )
        else
            return (
                <div className={styles.ProfilePage}>
                    <div className={styles.Summaryreviewsheading}>
                        <ul className={styles.Summaryreviews}>
                            {/* <Link className={styles.SummaryLink} to={this.props.match.url + "/BookingHistory"}><li className={styles.summaryreviewslist}>Booking History</li></Link> */}
                            <Link className={styles.SummaryLink} to={this.props.match.url}><li className={styles.summaryreviewslist}>Update Profile</li></Link>
                        </ul>
                    </div>

                    <div className={styles.Moviesummarybox}>
                        {/* <Route path="/MyProfile/BookingHistory" exact component={BookingHistory} /> */}
                        <Route path="/MyProfile" exact component={UpdateProfile} />
                        <div>
                            <Link to='/userDelete'>
                                <button type="submit" className={styles.submitbtn}>Delete Account</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )
    }
}
export default MyProfile;