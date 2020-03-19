import React, {Component } from 'react';
import '../stylesheets/HeaderFooter.css';
import Logo from '../images/logo1.png';

class Header extends Component {
    render() {
        return (
            <div className="App-header">

                <div className="App-header-left">
                    <img src={Logo} alt="logo" />
                    <input className="search-box" type="text" placeholder="Search for Movies" />
                </div>

                <div className="App-header-right">
                    <select>
                        <option>Hyderabad</option>
                        <option>Gwalior</option>
                    </select>
                    <button>SignIn</button>
                </div>

            </div>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <div>
                <div className="about">
                    <h4>Book a Movie Experience Near You With ClickToBook!</h4>
                    <p className="about-info-para">Life has never been so convenient for a movie buff! Remember the time when you had to stand in a long queue outside the theatre to book movie tickets? That time is gone now! With the emergence of ClickToBook, booking movie tickets has become a cake walk. Now enjoy movies playing near you with just a click! ClickToBook is Movies on the go – Jahan Mood Kiya Wahan Book Kiya! Just take out your phone, launch the app, choose your movie, theatre & showtime near you, and book tickets online, right away! So simple. Isn't it! We give you some more amazingly cool reasons why you should book your movie tickets here like our Offers & Discounts!</p>
                </div>

                <h4>Customer Care : +91 9898989898</h4>

                <div className="App-footer">

                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                    <a href="#" className="fa fa-youtube"></a>
                    <a href="#" className="fa fa-instagram"></a>
                </div>
            </div>
        )
    }
}


export {
    Header,
    Footer,
}