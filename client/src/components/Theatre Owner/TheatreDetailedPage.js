import React, { Component } from 'react';
// import { Route, Link, Switch } from 'react-router-dom';

import axios from 'axios';

import styles from './stylesheets/TheatreDetailedPage.module.css';
import SlotDetails from './SlotDetails'
import AddMovieToSlot from './AddMovieToSlot'

class TheatreDetailedPage extends Component {
    state = {
        getSlotInfoBody: {
            day: "2020-06-07"
        },
        theatres: [],
        selectedSlotInfo: {
            _id: '',
            _movie: '',
            _slot: '',
            _theatre: '',
            day: '',
            seatInfo: {
                A: {
                    availability: [],
                    price: ''
                },
                B: {
                    availability: [],
                    price: ''
                }
            }
        },
        selectedSlotId: '',
        selectedTheatreId : ''
    }

    ShowTheatresAPIHandler = () => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        axios.get('http://localhost:3000/theatres')
            .then(response => {
                console.log('show theatres done')
                this.setState({
                    theatres: response.data.active,
                });
                //console.log(this.state)
            }).catch((e) => alert(e));
    }

    updateSlotState = (event) => {
        this.setState({
            getSlotInfoBody : {
                day: event.target.value
            }
        })
    }

    componentDidMount() {
        this.ShowTheatresAPIHandler();
    }

    GetSlotInfoAPIHandler = (slotid, theatreid) => {
        this.setState({
            selectedSlotInfo: {
                _id: '',
                _movie: '',
                _slot: '',
                _theatre: '',
                day: '2020-06-07',
                seatInfo: {
                    A: {
                        availability: [],
                        price: ''
                    },
                    B: {
                        availability: [],
                        price: ''
                    }
                }
            },
            selectedSlotId: '',
            selectedTheatreId : ''
        })
        console.log('get slotInfo done!')
        //console.log(theatreid, slotid, this.state.getSlotInfoBody)
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        axios.put(`http://localhost:3000/theatres/${theatreid}/${slotid}`, this.state.getSlotInfoBody)
            .then(response => {
                console.log(response.data)
                if (response.data.movieName) {
                    this.setState({
                        selectedSlotInfo: {
                            _id: response.data.showTime._id,
                            _movie: response.data.showTime._movie,
                            movieName : response.data.movieName.title,
                            _slot: response.data.showTime._slot,
                            _theatre: response.data.showTime._theatre,
                            day: response.data.showTime.day,
                            seatInfo: {
                                A: {
                                    availability: response.data.showTime.seatInfo.A.availability,
                                    price: response.data.showTime.seatInfo.A.price
                                },
                                B: {
                                    availability: response.data.showTime.seatInfo.B.availability,
                                    price: response.data.showTime.seatInfo.B.price
                                }
                            }
                        },
                        selectedSlotId: response.data.showTime._id

                    })
                }
                else if (!response.data.movieName) {
                    this.setState({

                        selectedSlotId: response.data._slot,
                        selectedTheatreId : this.props.match.params.id
                    })
                }
                //console.log(this.state)

            }).catch((e) => alert(e));
    }

    render() {
        var selectedTheatreId = this.props.match.params.id;
        var selectedTheatre = null;
        this.state.theatres.filter((theatre) => {
            if (theatre._id === selectedTheatreId) {
                selectedTheatre = theatre
            }
        });
        //console.log(selectedTheatre)
        if (selectedTheatre) {
            return (
                <div className={styles.movie}>

                    <div >
                        <h1 >{selectedTheatre.name}</h1>
                        <h3 > Location : {selectedTheatre.location.street}, {selectedTheatre.location.city}, {selectedTheatre.location.state}, {selectedTheatre.location.country}</h3>
                        <h3 > Lease Info : {selectedTheatre.leaseInfo.startDate} - {selectedTheatre.leaseInfo.lastDate}</h3>
                        <h3 >Gold seats : {selectedTheatre.seatInfo.A}, Balcony seats : {selectedTheatre.seatInfo.B}</h3>
                    </div>

                    <input type="date" value={this.state.getSlotInfoBody.day} onChange={this.updateSlotState}></input>
                    <div className={styles.slotList}>
                        {
                            selectedTheatre.slotInfo.map((slot, idx) => {
                                return (
                                    <div key={idx} className={styles.slotListElement}>
                                        <button onClick={() => this.GetSlotInfoAPIHandler(slot._id, selectedTheatreId)}>{`Show - ${idx + 1}`}<br></br>{slot.startTime} - {slot.endTime}</button>
                                    </div>
                                )
                            })
                        }
                    </div>

                    {
                        (this.state.selectedSlotId) ?
                        
                            (!this.state.selectedSlotInfo._id) ?
                            <AddMovieToSlot id={this.state.selectedSlotId}
                            day = {this.state.getSlotInfoBody.day} theatreId = {this.state.selectedTheatreId}/> :
                                <SlotDetails slot={this.state.selectedSlotInfo} />
                        : null
                        /* //  <div>
                        //     <h1>No movie is added in this slot</h1>
                        //     <button>Add Movie In this Slot</button>
                        // </div>  */
                    }
                </div>
            )
        }
        else
            return (
                <h1>Loading</h1>
            )
    }
}

export default TheatreDetailedPage

// import React, { Component } from 'react';
// import { Route, Link,Switch } from 'react-router-dom';

// import axios from 'axios';

// import styles from './stylesheets/TheatreDetailedPage.module.css';
// import SlotDetails from './SlotDetails'
// import ShowTheatres from "../Customer/ShowTheatres";
// import TheatreSeats from '../Customer/TheatreSeats';

// class TheatreDetailedPage extends Component {
//     state = {
//         getSlotInfoBody: {
//             day: "2020-06-07"
//         },
//         theatres: [],
//     }

//     ShowTheatresAPIHandler = () => {
//         axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
//         axios.get('http://localhost:3000/theatres')
//             .then(response => {
//                 console.log('show theatres done')
//                 this.setState({
//                     theatres: response.data.active,
//                 });
//                 //console.log(this.state)
//             }).catch((e) => alert(e));
//     }

//     componentDidMount() {
//         this.ShowTheatresAPIHandler();
//     }

//     GetSlotInfoAPIHandler = (slotid, theatreid) => {
//             this.props.history.push(`/TheatreDetailPage/${theatreid}/SlotDetails/${slotid}`);
//             window.location.reload(false);
//     }

//     render() {
//         var selectedTheatreId = this.props.match.params.id;
//         var selectedTheatre = null;
//         this.state.theatres.filter(theatre => {
//             if (theatre._id === selectedTheatreId) {
//                 selectedTheatre = theatre
//             }
//         });
//         //console.log(selectedTheatre)
//         if (selectedTheatre) {
//             return (
//                 <div className={styles.movie}>

//                     <div >
//                         <h1 >{selectedTheatre.name}</h1>
//                         <h3 > Location : {selectedTheatre.location.street}, {selectedTheatre.location.city}, {selectedTheatre.location.state}, {selectedTheatre.location.country}</h3>
//                         <h3 > Lease Info : {selectedTheatre.leaseInfo.startDate} - {selectedTheatre.leaseInfo.lastDate}</h3>
//                         <h3 >Gold seats : {selectedTheatre.seatInfo.A}, Balcony seats : {selectedTheatre.seatInfo.B}</h3>
//                     </div>

//                     <input type="date"></input>
//                     <div className={styles.slotList}>
//                         {
//                             selectedTheatre.slotInfo.map((slot, idx) => {
//                                 return (
//                                     <div key={idx} className={styles.slotListElement}>
//                                         {/* <Link to={`/TheatreDetailPage/${selectedTheatre._id}/SlotDetails/${slot._id}`}>
//                                             <h3>{`Show - ${idx + 1}`}</h3>
//                                             <p>{slot.startTime} - {slot.endTime}</p>
//                                         </Link> */}
//                                         <button onClick={() => this.GetSlotInfoAPIHandler(slot._id, selectedTheatreId)}>{`Show - ${idx + 1}`}</button>

//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>

//                     <Route path="/TheatreDetailPage/:TheatreId/SlotDetails/:SlotId" exact component={SlotDetails} />

//                 </div>
//             )
//         }
//         else
//             return (
//                 <h1>Loading</h1>
//             )
//     }
// }

// export default TheatreDetailedPage