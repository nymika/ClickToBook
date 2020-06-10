import React, { Component } from 'react';

import axios from 'axios';

class SlotDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: this.props.slot.movieName,
            movieId : this.props.slot._movie,
            date: this.props.slot.day,
            theatre : this.props.slot._theatre,
            slotId : this.props.slot._slot,
            seatInfo: {
                A: this.props.slot.seatInfo.A.price,
                B: this.props.slot.seatInfo.B.price
            }
        }
        // this.updateSlotState = this.updateSlotState.bind(this);
        // this.PostSlotInfoAPIHandler = this.PostSlotInfoAPIHandler.bind(this)
    }

    // PostSlotInfoAPIHandler = () => {
    //     console.log(this.state)
    //     const inputBody ={
    //         movieid : '5edbc119c3ea8579a8aa8fda',
    //         priceInfo : {
    //             A : this.state.seatInfo.A,
    //             B : this.state.seatInfo.B
    //         },
    //         bookingInfo : [ {
    //             day : this.state.date,
    //             status : 'available',
    //             slot : this.state.slotId
    //         }]
    //     }
    //     console.log(inputBody)
    //     axios.post(`http://localhost:3000/theatres/showTime/${this.state.theatre}`,inputBody)
    //     .then( response => {
    //         console.log(response)
    //     }).catch( (e) => alert(e))
    // }

    // updateSlotState = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }

    // componentDidMount() {
    //     this.PostSlotInfoAPIHandler();
    // }

    render() {

        return (
            <div>
                
                {/* <input type="text" placeholder="Movie Name"
                    name="movie" value={this.state.movie} onChange={this.updateSlotState}></input>
                <button onClick={() => this.PostSlotInfoAPIHandler()}>Update movie in this slot</button> */}
                <h1>Movie name : {this.state.movie}</h1>
                <h2>Date : {this.state.date}</h2>
                <h2>Seat Prices : </h2>
                <h3>Gold - {this.state.seatInfo.A}</h3>
                <h3>Balcony - {this.state.seatInfo.B}</h3>
                {/* <button>Show seating arrangements</button> */}
            </div>
        )
    }
}

export default SlotDetails