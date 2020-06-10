import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';

import './stylesheets/TheatreSeats.css';
import ETicket from './ETicket';

class TheatreSeats extends Component {

    constructor(props) {
        super(props);
        this.state = {
            seat: [
                'G1', 'G2', 'G3', 'G4', 'G5', 'G6',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6',
                'B7', 'B8', 'B9', 'B10', 'B11', 'B12'
            ],
            seatAvailable: [
                'G1', 'G2', 'G3', 'G4', 'G5', 'G6',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6',
                'B7', 'B8', 'B9', 'B10', 'B11', 'B12'
            ],
            seatReserved: [],
            seatSelected: [],
            seatInfo: {
                'G1': '',
                'G2' : '',
                'G3' : '',
                'G4' : '',
                'G5' : '',
                'G6' : '',
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
            }
        }
    }

    GetSlotInfoAPIHandler = () => {
        //console.log('entered')
        axios.get(`http://localhost:3000/ticketbooking/${this.props.slotId}`)
            .then(response => {
                console.log(response.data)
                this.setState({
                    seatInfo : {
                        'G1' : response.data.A.availability[0],
                        'G2' : response.data.A.availability[1],
                        'G3' : response.data.A.availability[2],
                        'G4' : response.data.A.availability[3],
                        'G5' : response.data.A.availability[4],
                        'G6' : response.data.A.availability[5],
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
        // this.setState({
        //     seatReserved: []
        // })
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

                    <Link to={'/GetTickets'}>
                        <button type="button" onClick={() => {
                            console.log(this.state.seatReserved)
                            window.scrollTo(0, 92500)
                        }}>Get Ticket</button>
                    </Link>
                    <Route path={"/GetTickets"} render={() =>
                    
                        <ETicket Title={"Title"}
                            Poster={"Poster"}
                            Theatre={"Theatre"}
                            dimen={"dimen"}
                            language={"language"}
                            time={"time"}
                            date={"date"}
                            numofseats={this.state.seatReserved.length}
                            seats={this.state.seatReserved}
                            ticketprice={"ticketprice"}
                            conveniencefees={"conveniencefees"}
                            amountpaid={"amountpaid"}
                            bookingid={"bookingid"}
                            bookingdatetime={"bookingdatetime"}
                            confirmationid={"confirmationid"} />
                    } />
                </div>
            </div>
        )
    }
}

class DrawGrid extends Component {
    render() {
        return (
            <div className="container">
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
