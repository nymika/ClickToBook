import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import styles from './stylesheets/HeaderFooter.module.css';
import Logo from './images/logo1.png';

class Header extends Component {
    render() {
        return (
            <div className={styles.Appheader}>

                <div className={styles.Appheaderleft}>
                    <Link to="/">
                    <img className={styles.Applogo} src={Logo} alt="logo" /></Link>
                    <input className={styles.searchbox} type="text" placeholder="Search for Movies" />
                </div>

                <div className={styles.Appheaderright}>
                    <select>
                        <option>Hyderabad</option>
                        <option>Gwalior</option>
                    </select>
                    <Link to='/userLogin'>
                    <button>SignIn</button></Link>
                    <Link to='/MyProfile'>
                    <button>MyProfile</button></Link>
                </div>

            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <div>
                <div className={styles.about}>
                    <h4>Book a Movie Experience Near You With ClickToBook!</h4>
                    <p className={styles.aboutinfopara}>Life has never been so convenient for a movie buff! Remember the time when you had to stand in a long queue outside the theatre to book movie tickets? That time is gone now! With the emergence of ClickToBook, booking movie tickets has become a cake walk. Now enjoy movies playing near you with just a click! ClickToBook is Movies on the go – Jahan Mood Kiya Wahan Book Kiya! Just take out your phone, launch the app, choose your movie, theatre & showtime near you, and book tickets online, right away! So simple. Isn't it! We give you some more amazingly cool reasons why you should book your movie tickets here like our Offers & Discounts!</p>
                </div>

                <h4>Customer Care : +91 9898989898</h4>

                <div className={styles.Appfooter}>

                    <a href="www.facebook.com" className={`fa fa-facebook ${styles.fa} ${styles.fa_facebook}`}> </a>
                    <a href="www.twitter.com" className={`fa fa-twitter ${styles.fa} ${styles.fa_twitter}`}> </a>
                    <a href="www.linkedin.com" className={`fa fa-twitter ${styles.fa} ${styles.fa_linkedin}`}> </a>
                    <a href="www.youtube.com" className={`fa fa-twitter ${styles.fa} ${styles.fa_youtube}`}> </a>
                    <a href="www.instagram.com" className={`fa fa-twitter ${styles.fa} ${styles.fa_instagram}`}> </a>
                    </div>
            </div>
        )
    }
}


export {
    Header,
    Footer,
}