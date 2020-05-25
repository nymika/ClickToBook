import React, {Component } from 'react';
//import {BrowserRouter, Link, Route} from 'react-router-dom';

import styles from './stylesheets/MyProfile.module.css'

import ETicket from './ETicket';
import deadpool from "./images/deadpool.jpg";
import alice from "./images/alice.jpg";

class BookingHistory extends Component {

    state = {
        bookings : [
            {id : 'Deadpool', Title : 'Deadpool', Poster : deadpool, dimen : '2D', language : 'Telugu', Theatre : 'BVK', time : '07:45pm', date : '15-DEC-2018', numofseats : '4', seats : 'BALCONY  -  G26, G27, G28, G29', ticketprice : 'RS.700', conveniencefees : 'Rs.50', amountpaid : 'Rs.750', bookingid : 'WKJ6S9J', bookingdatetime : ' DEC 15 2018 02:29PM', confirmationid : 'WKJ6S9J'},
            {id : 'Alice', Title : 'Alice through the looking glass', Poster : alice, dimen : '2D', language : 'Telugu', Theatre : 'BVK', time : '07:45pm', date : '15-DEC-2018', numofseats : '4', seats : 'BALCONY-G26,G27,G28,G29', ticketprice : 'RS.700', conveniencefees : 'Rs.50', amountpaid : 'Rs.750', bookingid : 'WKJ6S9J', bookingdatetime : ' DEC 15 2018 02:29PM', confirmationid : 'WKJ6S9J' }
            ]
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        let ticketsHistory = (
        <div className = {styles.profileBox}>
            
            { Object.keys(this.state.bookings).length === 0  ? 
                <div>
                <p>You don't seem to have any bookings done in the past</p>
                </div>
                :
                <div className={styles.ticketsList}>
                {
                    this.state.bookings.map ( i => {
                        return (
                        <ETicket Title={i.Title}
                               Poster={i.Poster}
                               Theatre={i.Theatre}
                               dimen={i.dimen}
                               language={i.language}
                               time={i.time}
                               date={i.date}
                               numofseats={i.numofseats}
                               seats={i.seats}
                               ticketprice={i.ticketprice}
                               conveniencefees={i.conveniencefees}
                               amountpaid={i.amountpaid}
                               bookingid={i.bookingid}
                               bookingdatetime={i.bookingdatetime}
                               confirmationid={i.confirmationid}/>
                        )
                    })
                }
                </div>
            }

        </div>
        )

        return (
            <div>
            {ticketsHistory}
            </div>
        )
    }
}

export default BookingHistory;