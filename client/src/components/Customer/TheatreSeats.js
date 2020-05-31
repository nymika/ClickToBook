import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import './stylesheets/TheatreSeats.css';
import ETicket from './ETicket';

class TheatreSeats extends Component {
    componentDidMount() { console.log("theatre seats showed"); }

    constructor() {
        super();
        this.state = {
            seat: [
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6',
                'C1', 'C2', 'C3', 'C4', 'C5', 'C6'
            ],
            seatAvailable: [
                'A1', 'A2', 'A3', 'A4', 'A5', 'A6',
                'B1', 'B2', 'B3', 'B4', 'B5', 'B6',
                'C1', 'C2', 'C3', 'C4', 'C5', 'C6'
            ],
            seatReserved: [],
            seatSelected: [],
        }
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

    render() {
        return (
            <BrowserRouter>
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

                    <Link to ={'/GetTickets'}>
                    <button type="button" onClick={ () => {
                        console.log(this.state.seatReserved)
                        window.scrollTo(0,92500)} }>Get Ticket</button>
                    </Link>
                    <Route path={"/GetTickets"} render={ () => 
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
                               confirmationid={"confirmationid"}/>
                    } />
                </div>
            </BrowserRouter>
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
                <button type="button" className="btn-success btnmargin" onClick={() => this.props.handleSubmited()}>Confirm Booking</button>
            </div>
        )
    }

    onClickSeat(seat) {
        this.props.onClickData(seat);
    }
}
export default TheatreSeats;
