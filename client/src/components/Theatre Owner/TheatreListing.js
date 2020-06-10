import React, { Component } from 'react';
import { Link, Route, NavLink } from 'react-router-dom';

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
                    active: response.data.active,
                    unsubscribed: response.data.expired,
                    unapproved: response.data.unapproved
                });
            }).catch((e) => alert(e));
    }

    SubscribeTheatreAPIHandler = (theatre) => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        const body = {
            leaseInfo: {
                lastDate: '2022-06-17'
            }
        }
        axios.put(`http://localhost:3000/theatres/update/${theatre._id}`, body)
            .then(response => {
                console.log('subscription done')
                console.log(response.data)
                this.ShowTheatresAPIHandler()
            }).catch((e) => alert(e));
    }

    DeleteTheatreAPIHandler = (theatre) => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        const body = {
            id: theatre._id
        }
        console.log(body)
        axios.delete('http://localhost:3000/theatres', body)
            .then(response => {
                console.log('deletion done')
                console.log(response.data)
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
                                    startDate={theatre.leaseInfo.startDate}
                                    lastDate={theatre.leaseInfo.lastDate}
                                    Aseat={theatre.seatInfo.A}
                                    Bseat={theatre.seatInfo.B}
                                // Screens={theatre.Screens}
                                />

                                <button className={styles.Delete}
                                    onClick={() => this.DeleteTheatreAPIHandler(theatre)}>
                                    Delete</button>
                                <br></br>
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
                                    startDate={theatre.leaseInfo.startDate}
                                    lastDate={theatre.leaseInfo.lastDate}
                                    Aseat={theatre.seatInfo.A}
                                    Bseat={theatre.seatInfo.B}
                                // Screens={theatre.Screens}
                                />
                                
                                <Link to ={`/TheatreDetailPage/${theatre._id}`}
                                key={theatre._id}>
                                <button className={styles.Subscribe}
                                    >See More</button>
                                    </Link>

                                <button className={styles.Delete}
                                    onClick={() => this.DeleteTheatreAPIHandler(theatre)}>
                                    Delete</button>
                                <br></br>
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
                                    startDate={theatre.leaseInfo.startDate}
                                    lastDate={theatre.leaseInfo.lastDate}
                                    Aseat={theatre.seatInfo.A}
                                    Bseat={theatre.seatInfo.B}
                                // Screens={theatre.Screens}
                                />

                                <button className={styles.Delete}
                                    onClick={() => this.DeleteTheatreAPIHandler(theatre)}>
                                    Delete</button>

                                <button className={styles.Subscribe}
                                    onClick={() => this.SubscribeTheatreAPIHandler(theatre)}>
                                    Subscribe</button>
                                <br></br>
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
                            <NavLink className={styles.SummaryLink}
                                to={this.props.match.url + "/unapproved"}
                                activeStyle={{
                                    "borderBottom": "2px solid #4e5565",
                                    "color": "white",
                                    "backgroundColor": "#282c34"
                                }}><li className={styles.summaryreviewslist}>UNAPPROVED THEATRES</li></NavLink>
                            <NavLink className={styles.SummaryLink}
                                to={this.props.match.url}
                                activeStyle={{
                                    "borderBottom": "2px solid #4e5565",
                                    "color": "white",
                                    "backgroundColor": "#282c34"
                                }} exact
                            ><li className={styles.summaryreviewslist}>ACTIVE THEATRES</li></NavLink>
                            <NavLink className={styles.SummaryLink}
                                to={this.props.match.url + "/unsubscribed"}
                                activeStyle={{
                                    "borderBottom": "2px solid #4e5565",
                                    "color": "white",
                                    "backgroundColor": "#282c34"
                                }}
                            ><li className={styles.summaryreviewslist}>UNSUBSCRIBED THEATRES</li></NavLink>
                        </ul>
                    </div>

                    <div className={styles.Moviesummarybox}>
                        <Route path="/TL" exact render={() => <div>{activetheatres} </div>} />
                        <Route path="/TL/unapproved" render={() => <div>{unapprovedtheatres} </div>} />
                        <Route path="/TL/unsubscribed" render={() => <div>{unsubscribedtheatres} </div>} />
                    </div>
                </div>
            </div>
        )
    }
}

export default TheatreListing;

// import React, { Component } from 'react';
// import { Link, Route } from 'react-router-dom';

// import axios from 'axios';

// import styles from './stylesheets/TheatreListing.module.css'
// import Theatre from './Theatre'

// class TheatreListing extends Component {

//     state = {
//         active: [],
//         unsubscribed: [],
//         unapproved: [],
//         showTheatres: true
//     }

//     deleteTheatreHandler = (theatreIndex) => {
//         const theatres = [...this.state.theatres];
//         theatres.splice(theatreIndex, 1);
//         this.setState({ theatres: theatres });
//     }

//     ShowTheatresAPIHandler = () => {
//         axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
//         axios.get('http://localhost:3000/theatres')
//             .then(response => {
//                 console.log('show theatres done')
//                 this.setState({
//                     active: response.data.active,
//                     unsubscribed: response.data.unsubscribed,
//                     unapproved: response.data.unapproved
//                 });
//                 console.log(this.state);
//             }).catch((e) => alert(e));
//     }

//     componentDidMount() {
//         this.ShowTheatresAPIHandler();
//     }

//     render() {
//         let unapprovedtheatres = null;
//         let activetheatres = null;
//         let unsubscribedtheatres = null;
//         unapprovedtheatres =
//             (
//                 <div>
//                     {this.state.unapproved.map((theatre, index) => {
//                         return (
//                             <div>
//                                 <Theatre
//                                     id={theatre._id}
//                                     Title={theatre.name}
//                                     street={theatre.location.street}
//                                     city={theatre.location.city}
//                                     state={theatre.location.state}
//                                     country={theatre.location.country}
//                                     startTime={theatre.leaseInfo.lastDate}
//                                     endTime={theatre.leaseInfo.endTime}
//                                     Aseat={theatre.seatInfo.A}
//                                     Bseat={theatre.seatInfo.B}
//                                 // Screens={theatre.Screens}
//                                 />,

//                                 <button className={styles.Delete}
//                                     onClick={() => this.deleteTheatreHandler(index)}>
//                                     Delete</button>
//                                 {/* <button className={styles.Subscribe}
//                                     onClick={() => this.ApproveTheatreAPIHandler(theatre._id)}>
//                                     Accept Approval</button> */}
//                             </div>
//                         )
//                     })}
//                 </div>
//             )
//         activetheatres =
//             (
//                 <div>
//                     {this.state.active.map((theatre, index) => {
//                         return (
//                             <div>
//                                 <Theatre
//                                     id={theatre._id}
//                                     Title={theatre.name}
//                                     street={theatre.location.street}
//                                     city={theatre.location.city}
//                                     state={theatre.location.state}
//                                     country={theatre.location.country}
//                                     startTime={theatre.leaseInfo.lastDate}
//                                     endTime={theatre.leaseInfo.endTime}
//                                     Aseat={theatre.seatInfo.A}
//                                     Bseat={theatre.seatInfo.B}
//                                 // Screens={theatre.Screens}
//                                 />,

//                                 <button className={styles.Delete}
//                                     onClick={() => this.deleteTheatreHandler(index)}>
//                                     Delete</button>
//                             </div>
//                         )
//                     })}
//                 </div>
//             )
//             unsubscribedtheatres =
//             (
//                 <div>
//                     {this.state.unsubscribed.map((theatre, index) => {
//                         return (
//                             <div>
//                                 <Theatre
//                                     id={theatre._id}
//                                     Title={theatre.name}
//                                     street={theatre.location.street}
//                                     city={theatre.location.city}
//                                     state={theatre.location.state}
//                                     country={theatre.location.country}
//                                     startTime={theatre.leaseInfo.lastDate}
//                                     endTime={theatre.leaseInfo.endTime}
//                                     Aseat={theatre.seatInfo.A}
//                                     Bseat={theatre.seatInfo.B}
//                                 // Screens={theatre.Screens}
//                                 />,

//                                 <button className={styles.Delete}
//                                     onClick={() => this.deleteTheatreHandler(index)}>
//                                     Delete</button>
//                             </div>
//                         )
//                     })}
//                 </div>
//             )

//         return (
//             <div className={styles.MovieListing} >
//                 <h1 className={styles.heading} >Theatre Listing : </h1>
//                 <div className={styles.MovieListing}>
//                     <div className={styles.Summaryreviewsheading}>
//                         <ul className={styles.Summaryreviews}>
//                             <Link className={styles.SummaryLink} to={this.props.match.url + "/unapproved"}><li className={styles.summaryreviewslist}>UNAPPROVED THEATRES</li></Link>
//                             <Link className={styles.SummaryLink} to={this.props.match.url}><li className={styles.summaryreviewslist}>ACTIVE THEATRES</li></Link>
//                             <Link className={styles.SummaryLink} to={this.props.match.url + "/unsubscribed"}><li className={styles.summaryreviewslist}>UNSUBSCRIBED THEATRES</li></Link>
//                         </ul>
//                     </div>

//                     <div className={styles.Moviesummarybox}>
//                         <Route path="/TL" exact render={() => <div>{activetheatres} </div>} />
//                         <Route path="/TL/unapproved" exact render={() => <div>{unapprovedtheatres} </div>} />
//                         <Route path="/TL/unsubscribed" exact render={() => <div>{unsubscribedtheatres} </div>} />
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default TheatreListing;
