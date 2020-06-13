import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import './stylesheets/TheatreSeats.css';
import ETicket from './ETicket';

class TheatreSeats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seat: [],
            seatAvailable: [],
            seatReserved: [],
            seatSelected: [],
            seatNotAvailable : [],
            seatInfo: {
                'A1': '',
                'A2': '',
                'A3': '',
                'A4': '',
                'A5': '',
                'A6': '',
                'B1' : '',
                'B2' : '',
                'B3' : '',
                'B4' : '',
                'B5' : '',
                'B6' : '',
                'B7' : '',
                'B8' : '',
                'B9' : '',
                'B10' : '',
                'B11' : '',
                'B12' : ''
            },
            showTimeId: this.props.showTimeId,
            ticketId : '',
            ticket : {},
            showTicket : false
        }
    }

    GetSlotInfoAPIHandler = () => {
        console.log('entered')
        axios.get(`http://localhost:3000/ticketbooking/${this.props.showTimeId}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    seatInfo : {
                        'A1': response.data.A.availability[0],
                        'A2': response.data.A.availability[1],
                        'A3': response.data.A.availability[2],
                        'A4': response.data.A.availability[3],
                        'A5': response.data.A.availability[4],
                        'A6': response.data.A.availability[5],
                        'B1' : response.data.B.availability[0],
                        'B2' : response.data.B.availability[1],
                        'B3' : response.data.B.availability[2],
                        'B4' : response.data.B.availability[3],
                        'B5' : response.data.B.availability[4],
                        'B6' : response.data.B.availability[5],
                        'B7' : response.data.B.availability[6],
                        'B8' : response.data.B.availability[7],
                        'B9' : response.data.B.availability[8],
                        'B10' : response.data.B.availability[9],
                        'B11' : response.data.B.availability[10],
                        'B12' : response.data.B.availability[11]
                    }
                })

                //Object.keys(objectName).forEach(item => console.log(objectName[item]))

                Object.keys(this.state.seatInfo).forEach( item => {
                    if(! this.state.seatInfo[item]) {
                        this.setState({
                            seatNotAvailable : this.state.seatNotAvailable.concat(item)
                        })
                    }
                    else {
                        this.setState({
                            seatAvailable : this.state.seatAvailable.concat(item),
                            seat : this.state.seat.concat(item)
                        })
                    }
                })

                 console.log(this.state.seatInfo)
             }).catch((e) => alert(e))
     }

    onClickData(seat) {
        if (this.state.seatReserved.indexOf(seat) > -1) {
            this.setState({
                seatAvailable: this.state.seatAvailable.concat(seat),
                seatReserved: this.state.seatReserved.filter(res => res !== seat),
                // seatSelected: this.state.seatSelected.filter(res => res != seat)
            })
        } else {
            this.setState({
                seatReserved: this.state.seatReserved.concat(seat),
                // seatSelected: this.state.seatSelected.concat(seat),
                seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
            })
        }
    }

    checktrue(row) {
        if (this.state.seatSelected.indexOf(row) > -1) {
            return false
        } else {
            return true
        }
    }

     handleSubmited() {
        this.setState({ seatSelected: this.state.seatSelected.concat(this.state.seatReserved) })
        //console.log(this.state.seatReserved, this.state.seatSelected)
        const input = {
            _showTime: this.state.showTimeId,
            seatsInfo: this.state.seatReserved,
        }
        console.log(input)
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token")
        axios.post('http://localhost:3000/ticket', input)
            .then(response => {
                console.log(response.data)
                this.setState({
                    ticketId : response.data
                })
            }).catch((e) => alert(e))
    }

    GetTicketsAPIHandler() {
        const input = {
            _id : this.state.ticketId
        }
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token")
        axios.put('http://localhost:3000/ticketinfo', input)
            .then(response => {
                //console.log(response.data)
                this.setState({
                    ticket : response.data,
                    showTicket : true
                })
                console.log(this.state.ticket)
            }).catch((e) => alert(e))
        window.scrollTo(0, 92500)
    }

    componentDidMount() {
        //console.log('selected slot is', this.props.slotId)
        this.GetSlotInfoAPIHandler();
    }

    render() {
        return (
            <div>
                <div className="Background">
                    <div className="Box">
                        <DrawGrid
                            seat={this.state.seat}
                            available={this.state.seatAvailable}
                            reserved={this.state.seatReserved}
                            selected={this.state.seatSelected}
                            onClickData={this.onClickData.bind(this)}
                            checktrue={this.checktrue.bind(this)}
                            handleSubmited={this.handleSubmited.bind(this)}
                        />
                    </div>

                    
                        <button type="button" onClick={() => {
                            this.GetTicketsAPIHandler();
                        }}>Get Ticket</button>
                    
                    { (this.state.showTicket ) ? 
                    <ETicket Title={this.state.ticket.movie.title}
                            Poster={this.state.ticket.movie.poster}
                            Theatre={this.state.ticket.ticket._showTime._theatre.name}
                            dimen={"2D"}
                            // language={}
                            time={this.state.ticket.bookedSlot.startTime}
                            date={this.state.ticket.ticket._showTime.day}
                            numofseats={this.state.seatReserved.length}
                            //seats = {this.state.ticket.ticket.seats[0].seatType - this.state.ticket.ticket.seats[0].seatno}
                            seats={this.state.seatReserved}
                            ticketprice={this.state.ticket.ticket.price}
                            conveniencefees={" - nill"}
                            amountpaid={this.state.ticket.ticket.price}
                            bookingid={this.state.ticketId}
                            bookingdatetime={this.state.ticket.ticket.booking}
                            confirmationid={this.state.ticket.ticket.customer} /> : null}
                    
                </div>
            </div>
        )
    }
}

class DrawGrid extends Component {
    render() {
        return (
            <div className="container">
                <h3>Showing Available Seats Only.</h3>
                <table className="grid">
                    <tbody>
                        <tr>
                            {this.props.seat.map(row =>
                                <td
                                    className={this.props.selected.indexOf(row) > -1 ? 'reserved' : (this.props.reserved.indexOf(row) > -1 ? 'selected' : 'available')}
                                    key={row} onClick={this.props.checktrue(row) ? e => this.onClickSeat(row) : null} >{row} </td>)}
                        </tr>
                    </tbody>
                </table>
                <h3>*G - GOLD seats</h3>
                <h3>*B - Balcony seats</h3>
                <button type="button" className="btn-success btnmargin" onClick={() => this.props.handleSubmited()}>Confirm Booking</button>
            </div>
        )
    }

    onClickSeat(seat) {
        this.props.onClickData(seat);
    }
}
export default TheatreSeats;
