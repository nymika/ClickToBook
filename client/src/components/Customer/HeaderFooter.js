import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './stylesheets/HeaderFooter.module.css';
import Logo from './images/logo9.png';
import search from './images/search.png'

class Header extends Component {
    // constructor(props) {
    //     super(props);
    //     // const token = localStorage.getItem("token");
    //     // const currentUserStorage = localStorage.getItem("currentUser");
    //     // this.safelyParseJSON = this.safelyParseJSON.bind(this)
    //     // const currentUser=this.safelyParseJSON(currentUserStorage)
    //     // this.state = {
    //     //     currentUser: currentUser
    //     // };
    // }

    safelyParseJSON = (json) => {
        var parsed
        try {
            parsed = JSON.parse(json)
        } catch (e) {
            // Oh well, but whatever...
        }

        return parsed // Could be undefined!
    }

    render() {

        return (
            <div className={styles.Appheader}>

                <div className={styles.Appheaderleft}>
                    <Link to="/">
                        <img className={styles.Applogo} src={Logo} alt="logo" />
                    </Link>
                    {/* <input className={styles.searchbox} type="text" placeholder="Search for Movies" /> */}

                </div>

                <div className={styles.Appheaderright}>
                    <Link to='/Search'>
                        {/* <button>Search</button> */}
                        <img src={search} alt='search' className={styles.search}></img>
                    </Link>

                    {!localStorage.getItem("token") &&
                        <Link to='/userLogin'>
                            <button className={styles.button}>SignIn</button></Link>
                    }
                    {localStorage.getItem("token") &&
                        <>
                            <Link to='/MyProfile'>
                                <button className={styles.button}>MyProfile</button>
                            </Link>
                            <Link to='/userLogout'>
                                <button className={styles.button}>SignOut</button>
                            </Link>
                        </>
                    }
                    <select className={styles.button}>
                        <option>Hyderabad</option>
                        <option>Gwalior</option>
                    </select>

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

                    <a href="https://www.facebook.com" className={`fa fa-facebook ${styles.fa} ${styles.fa_facebook}`}> </a>
                    <a href="https://www.twitter.com" className={`fa fa-twitter ${styles.fa} ${styles.fa_twitter}`}> </a>
                    <a href="https://www.youtube.com" className={`fa fa-youtube ${styles.fa} ${styles.fa_youtube}`}> </a>
                    
                    <a href="https://www.linkedin.com" className={`fa fa-linkedin ${styles.fa} ${styles.fa_linkedin}`}> </a>
                    <a href="https://www.instagram.com" className={`fa fa-instagram ${styles.fa} ${styles.fa_instagram}`}> </a>
                </div>
            </div>
        )
    }
}


export {
    Header,
    Footer,
}