import React,{Component} from 'react';
import styles from './stylesheets/ShowTheatres.module.css';

import {BrowserRouter} from 'react-router-dom';
import {Route,Link} from 'react-router-dom';
import TheatreSeats from './TheatreSeats';

class ShowTheatres extends Component
{
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <BrowserRouter>
                <div>
            <div className = {styles.ShowTheatresBox}>
                <input type="date" className = {styles.DateBox}></input>
                <hr/>
                <div className = {styles.SingleTheatreBox}>
                    <h4 className= {styles.MovieName}>INOX</h4>
                    <Link to={this.props.match.url + '/TheatreSeats'} >
                        <button className = {styles.TimeButton} >10:30 AM</button>
                    </Link>
                    <Link to={this.props.match.url + '/TheatreSeats'} >
                        <button className = {styles.TimeButton} >4:00 PM</button>
                    </Link>
                    <Link to={this.props.match.url + '/TheatreSeats'} >
                        <button className = {styles.TimeButton}>7:00 PM</button>
                    </Link>
                </div>
                <div className = {styles.SingleTheatreBox}>
                    <h4 className={styles.MovieName}>INOX</h4>
                    <Link to={this.props.match.url + '/TheatreSeats'} >
                        <button className = {styles.TimeButton} >10:30 AM</button>
                    </Link>
                    <Link to={this.props.match.url + '/TheatreSeats'} >
                        <button className = {styles.TimeButton} >4:00 PM</button>
                    </Link>
                    <Link to={this.props.match.url + '/TheatreSeats'} >
                        <button className = {styles.TimeButton}>7:00 PM</button>
                    </Link>
                </div>
            </div>
                    <Route path="/MovieDetailPage/:id/ShowTheatres/TheatreSeats" exact component = {TheatreSeats} />
                </div>
            </BrowserRouter>
        )

    }
}

export default ShowTheatres;