import React, { Component } from 'react';

import axios from 'axios';

class AddMovieToSlot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slotId: this.props.id,
            movie: '',
            movieId: '',
            theatre: this.props.theatreId,
            day: this.props.day,
        }
        this.updateSlotState = this.updateSlotState.bind(this);
        this.PostSlotInfoAPIHandler = this.PostSlotInfoAPIHandler.bind(this)
    }

    PostSlotInfoAPIHandler = () => {
        console.log(this.state)
        const inputBody = {
            movieName: this.state.movie,
            priceInfo: {
                A: '400',
                B: '300'
            },

            day: this.state.day,
            status: 'available',
            _slot: this.state.slotId

        }
        console.log(inputBody)
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        axios.post(`http://localhost:3000/theatres/showTime/${this.state.theatre}`, inputBody)
            .then(response => {
                console.log(response.data)
                alert('Movie is added to the slot! Click on the showTime again for updated changes')

            }).catch((e) => alert(e))
    }

    updateSlotState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <h1>no movie added in this slot</h1>
                <h1>Movie name/id : </h1>
                <input type="text" placeholder="Movie Name"
                    name="movie" value={this.state.movie} onChange={this.updateSlotState}></input>
                <button onClick={() => this.PostSlotInfoAPIHandler()}>Add movie in this slot</button>
                {/* <h2>Date : {this.state.date}</h2>
                    <h2>Seat Prices : </h2>
                    <h3>Gold - {this.state.seatInfo.A}</h3>
                    <h3>Balcony - {this.state.seatInfo.B}</h3> */}
                {/* <button>Show seating arrangements</button> */}
            </div>
        )
    }
}

export default AddMovieToSlot