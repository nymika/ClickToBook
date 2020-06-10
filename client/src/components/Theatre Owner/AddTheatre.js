import React, { Component } from 'react';
import axios from 'axios';

import styles from './stylesheets/AddTheatre.module.css'

class AddTheatre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: {
                country: '',
                state: '',
                city: '',
                street: ''
            },
            seatInfo: {
                A: '6',
                B: '12'
            },
            slotInfo: [
                {
                    startTime: '', endTime: ''
                },
            ],
        }
        this.updateTheatreState = this.updateTheatreState.bind(this);
        this.addShowbtn = this.addShowbtn.bind(this);
    }

    updateTheatreState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    updateLocation = (e) => {
        this.setState({
            location: {
                ...this.state.location,
                [e.target.name]: e.target.value
            }
        })
    }

    handleChange = (e) => {
        let slots = [...this.state.slotInfo]
        slots[e.target.dataset.id][e.target.name] = e.target.value
        this.setState({
            slotInfo: slots
        })
    }
    
    addShowbtn = (event) => {
        this.setState((prevState) => ({
            slotInfo: [...prevState.slotInfo, { startTime: '', endTime: '' }],
        }))
    }

    AddTheatreAPIHandler = (e) => {
        //e.preventDefault()
        console.log('theatre added!')
        const theatre = this.state
        console.log(theatre)
        axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
        axios.post('http://localhost:3000/addtheatre', theatre)
            .then(response => {
                alert('A theatre is added!')
                console.log(response.data)
            }).catch((e) => alert(e));
        this.setState({
            name: '',
            location: {
                country: '',
                state: '',
                city: '',
                street: ''
            },
            seatInfo: {
                A: '6',
                B: '12'
            },
            slotInfo: [
                {
                    startTime: '', endTime: ''
                },
            ],
        })
    }


    render() {
        return (
            <div className={styles.AddTheatre}>
                <h1 className={styles.heading} >Add Theatre : </h1>


                <p className={styles.task}> Enter the Theatre Name : </p>
                <input className={styles.inputbox} type="text" placeholder="Theatre Name"
                    name="name" value={this.state.name} onChange={this.updateTheatreState} />


                <p className={styles.task}> Enter the Location : </p>
                <input className={styles.inputbox} type="text" placeholder=" Enter Street"
                    name="street" value={this.state.location.street} onChange={this.updateLocation} />
                <br></br>
                <input className={styles.inputbox} type="text" placeholder=" Enter City Name"
                    name="city" value={this.state.location.city} onChange={this.updateLocation} />
                <br></br>
                <input className={styles.inputbox} type="text" placeholder=" Enter State Name"
                    name="state" value={this.state.location.state} onChange={this.updateLocation} />
                <br></br>
                <input className={styles.inputbox} type="text" placeholder=" Enter Country Name"
                    name="country" value={this.state.location.country} onChange={this.updateLocation} />


                <p className={styles.task}>Add ShowTimes :</p>

                <button className={styles.addShowbtn} onClick={this.addShowbtn}></button>
                {
                    this.state.slotInfo.map((val, idx) => {
                        let startTimeId = `start-${idx}`, endTimeId = `end-${idx}`
                        return (
                            <div key={idx}>
                                <label htmlFor={startTimeId}>{`Show #${idx + 1}`}</label><br></br>
                                <input className={styles.inputbox} type="text" placeholder="START TIME- put 7:30 as 0730"
                                    name='startTime' data-id={idx} id={startTimeId} value={this.state.slotInfo[idx].startTime} onChange={this.handleChange} />
                                <input className={styles.inputbox} type="text" placeholder="END TIME- put 7:30 as 0730"
                                    name='endTime' data-id={idx} id={endTimeId} value={this.state.slotInfo[idx].endTime} onChange={this.handleChange} />
                            </div>
                        )
                    })
                }

                <br></br>
                <input className={styles.submitbutton} type="submit" onClick={this.AddTheatreAPIHandler} />
            </div>


        )
    }
}

export default AddTheatre;