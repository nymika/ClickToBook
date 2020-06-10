import React, { Component } from 'react';
import styles from './stylesheets/ShowTheatres.module.css';

import axios from 'axios';

import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import TheatreSeats from './TheatreSeats';
import tick from './images/tick.png';

class ShowTheatres extends Component {
    state = {
        date: '',
        getSlots: false,
        theatres: [],
        getSeats: false,
        selectedSlotId: '',
        selectedShowTimeId : '',
        selectedSlot: {}
    }

    updateDateState = (event) => {
        this.setState({
            date: event.target.value,
        })
    }

    GetSlotsAPIHandler() {
        this.setState({
            getSlots: true
        })
        console.log(this.state)
        console.log('slots are done')
        axios.put(`http://localhost:3000/shows/${this.props.movieId}`, this.state)
            .then(response => {
                //console.log(response.data)
                this.setState({
                    theatres: response.data
                })
                console.log(this.state.theatres)
            }).catch((e) => alert(e))
    }

    GetSeats(showTimeId) {
        console.log('theatres seats showed!')
        this.setState({
            getSeats: true,
            selectedShowTimeId: showTimeId
        })
        console.log(showTimeId)
    }

    // componentDidMount() {
    //     console.log(this.props);
    // }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className={styles.ShowTheatresBox}>
                        <input type="date" value={this.state.selectedDate} onChange={this.updateDateState} className={styles.DateBox}></input>
                        <button type="submit" onClick={() => this.GetSlotsAPIHandler()}><img className={styles.tick} src={tick} alt="submit" /></button>
                        {(this.state.getSlots) ?
                            <div>
                                <hr />
                                <div className={styles.SingleTheatreBox}>

                                    {
                                        this.state.theatres.map(theatre => {
                                            return (
                                                <div>
                                                    <h4 className={styles.MovieName}>{theatre.theatre[0].name}</h4>
                                                    {
                                                        theatre.showtimes.map(slot => {
                                                            var neededSlotId = slot.slot
                                                            var neededShowTimeId = slot._showTime
                                                            var neededSlot = {}
                                                            theatre.theatre[0].slotInfo.filter(theatreSlot => {
                                                                return (
                                                                    (theatreSlot._id === neededSlotId) ?
                                                                        
                                                                            neededSlot= theatreSlot
                                                                        
                                                                        : null
                                                                )
                                                            })
                                                            return (
                                                                <button className={styles.TimeButton}
                                                                    onClick={() => this.GetSeats(neededShowTimeId)}>{neededSlot.startTime} - {neededSlot.endTime}</button>
                                                            )



                                                        })
                                                        // theatre.theatre[0].slotInfo.map(slot => {
                                                        //     return (
                                                        //         <button className={styles.TimeButton}
                                                        //         onClick={  () => this.GetSeats(slot._id)}>{slot.startTime} - {slot.endTime}</button>
                                                        //     )
                                                        // })
                                                    }
                                                </div>
                                            )
                                        })}
                                </div>
                                <br></br><br></br>
                            </div> : null}
                    </div>
                    {
                        (this.state.getSeats) ?
                            <TheatreSeats slotId={this.state.selectedShowTimeId} /> : null
                    }

                </div>
            </BrowserRouter>
        )

    }
}

export default ShowTheatres;