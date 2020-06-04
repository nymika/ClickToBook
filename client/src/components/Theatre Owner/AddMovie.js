import React, { Component } from 'react';
import axios from 'axios';

import styles from './stylesheets/AddMovie.module.css';

class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: ''
        }
        this.updateMovieState = this.updateMovieState.bind(this);
        this.AddMovieAPIHandler = this.AddMovieAPIHandler.bind(this);
    }
    updateMovieState = (event) => {
        this.setState({
            movieName: event.target.value
        });
    }

    AddMovieAPIHandler = (e) => {
        //e.preventDefault()
        const movie = {
            name: this.state.movieName
        };
        console.log(movie);
        axios.post('http://localhost:3001/addmovie', movie)
            .then(response => {
                console.log('movie added!')
                console.log(response.data)
            }).catch((e) => alert(e));
        this.setState({
            movieName: '',
        })
    }

    render() {
        return (

            <div className={styles.AddMovie}>

                <h1 className={styles.heading}>Add Movie : </h1>

                <p className={styles.task}>
                    Enter the Movie Name : </p>

                <input className={styles.inputbox}
                    type="text" value={this.state.movieName} onChange={this.updateMovieState} placeholder="Movie Name" />
                <br></br>
                <input className={styles.submitbutton}
                    type="submit" onClick={this.AddMovieAPIHandler} />


            </div>

        )
    }
}

export default AddMovie;