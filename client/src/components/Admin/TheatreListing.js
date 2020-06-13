import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import axios from 'axios';

import styles from './stylesheets/TheatreListing.module.css'
import Theatre from './Theatre'

class TheatreListing extends Component {

    state = {
        active: [],
        unsubscribed: [],
        unapproved: [],
        showTheatres: true
    }

    deleteTheatreHandler = (theatreIndex) => {
        const theatres = [...this.state.theatres];
        theatres.splice(theatreIndex, 1);
        this.setState({ theatres: theatres });
    }

    ShowTheatresAPIHandler = () => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        axios.get('http://localhost:3000/theatres')
            .then(response => {
                console.log('show theatres done')
                this.setState({
                    active: response.data.approved,
                    unsubscribed: response.data.expired,
                    unapproved: response.data.unapproved
                });
            }).catch((e) => alert(e));
    }

    ApproveTheatreAPIHandler = (Id) => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        const body = {
            status : "approve",
            theatreId : Id
        }
        axios.put('http://localhost:3000/approval/', body)
        .then(response => {
            alert('Approved a theatre!')
            console.log(response.data)
            this.ShowTheatresAPIHandler()
        }).catch((e) => alert(e));
    }

    componentDidMount() {
        this.ShowTheatresAPIHandler();
    }

    render() {
        let unapprovedtheatres = null;
        let activetheatres = null;
        let unsubscribedtheatres = null;
        unapprovedtheatres =
            (
                <div>
                    {this.state.unapproved.map((theatre, index) => {
                        return (
                            <div>
                                <Theatre
                                    id={theatre._id}
                                    Title={theatre.name}
                                    street={theatre.location.street}
                                    city={theatre.location.city}
                                    state={theatre.location.state}
                                    country={theatre.location.country}
                                    startTime={theatre.leaseInfo.lastDate}
                                    endTime={theatre.leaseInfo.endTime}
                                    Aseat={theatre.seatInfo.A}
                                    Bseat={theatre.seatInfo.B}
                                // Screens={theatre.Screens}
                                />,

                                {/* <button className={styles.Delete}
                                    onClick={() => this.deleteTheatreHandler(index)}>
                                    Delete</button> */}
                                <button className={styles.Subscribe}
                                    onClick={() => this.ApproveTheatreAPIHandler(theatre._id)}>
                                    Accept Approval</button>
                            </div>
                        )
                    })}
                </div>
            )
        activetheatres =
            (
                <div>
                    {this.state.active.map((theatre, index) => {
                        return (
                            <div>
                                <Theatre
                                    id={theatre._id}
                                    Title={theatre.name}
                                    street={theatre.location.street}
                                    city={theatre.location.city}
                                    state={theatre.location.state}
                                    country={theatre.location.country}
                                    startTime={theatre.leaseInfo.lastDate}
                                    endTime={theatre.leaseInfo.endTime}
                                    Aseat={theatre.seatInfo.A}
                                    Bseat={theatre.seatInfo.B}
                                // Screens={theatre.Screens}
                                />

                                {/* <button className={styles.Delete}
                                    onClick={() => this.deleteTheatreHandler(index)}>
                                    Delete</button> */}
                            </div>
                        )
                    })}
                </div>
            )
            unsubscribedtheatres =
            (
                <div>
                    {this.state.unsubscribed.map((theatre, index) => {
                        return (
                            <div>
                                <Theatre
                                    id={theatre._id}
                                    Title={theatre.name}
                                    street={theatre.location.street}
                                    city={theatre.location.city}
                                    state={theatre.location.state}
                                    country={theatre.location.country}
                                    startTime={theatre.leaseInfo.lastDate}
                                    endTime={theatre.leaseInfo.endTime}
                                    Aseat={theatre.seatInfo.A}
                                    Bseat={theatre.seatInfo.B}
                                // Screens={theatre.Screens}
                                />

                                {/* <button className={styles.Delete}
                                    onClick={() => this.deleteTheatreHandler(index)}>
                                    Delete</button> */}
                            </div>
                        )
                    })}
                </div>
            )

        return (
            <div className={styles.MovieListing} >
                <h1 className={styles.heading} >Theatre Listing : </h1>
                <div className={styles.MovieListing}>
                    <div className={styles.Summaryreviewsheading}>
                        <ul className={styles.Summaryreviews}>
                            <Link className={styles.SummaryLink} to={this.props.match.url + "/unapproved"}><li className={styles.summaryreviewslist}>UNAPPROVED THEATRES</li></Link>
                            <Link className={styles.SummaryLink} to={this.props.match.url}><li className={styles.summaryreviewslist}>ACTIVE THEATRES</li></Link>
                            <Link className={styles.SummaryLink} to={this.props.match.url + "/unsubscribed"}><li className={styles.summaryreviewslist}>UNSUBSCRIBED THEATRES</li></Link>
                        </ul>
                    </div>

                    <div className={styles.Moviesummarybox}>
                        <Route path="/TL" exact render={() => <div>{activetheatres} </div>} />
                        <Route path="/TL/unapproved" exact render={() => <div>{unapprovedtheatres} </div>} />
                        <Route path="/TL/unsubscribed" exact render={() => <div>{unsubscribedtheatres} </div>} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TheatreListing;
