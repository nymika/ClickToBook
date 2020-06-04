import React, { Component } from 'react';
import styles from './stylesheets/TheatreListing.module.css'
import Theatre from './Theatre'

class TheatreListing extends Component {

    state = {
        theatres: [
            {
                id: '#1345', Title: 'INOX', Location: 'Banjara Hills',
                Screens: '6'
            },
            {
                id: '#1265', Title: 'Cinepolis', Location: 'Inorbit Mall',
                Screens: '7'
            },
            {
                id: '#1143', Title: 'INOX', Location: 'DB Mall',
                Screens: '5'
            },
            {
                id: '#3467', Title: 'Fun Cinemas', Location: 'DD Mall',
                Screens: '4'
            }
        ],
        otherState: 'some other value',
        showTheatres: true
    }

    deleteTheatreHandler = (theatreIndex) => {
        const theatres = [...this.state.theatres];
        theatres.splice(theatreIndex, 1);
        this.setState({ theatres: theatres });
    }

    render() {
        let theatres = null;
        if (this.state.showTheatres) {
            theatres =
                (
                    <div>
                        {this.state.theatres.map((theatre, index) => {
                            return (
                                [<Theatre
                                    id={theatre.id}
                                    Title={theatre.Title}
                                    Location={theatre.Location}
                                    Screens={theatre.Screens}
                                />,

                                <button className = {styles.Delete}
                                    onClick={() => this.deleteTheatreHandler(index)}>
                                    Delete</button>]
                            )
                        })}
                    </div>



                )
        }
        return (
            <div className={styles.MovieListing}>
                <h1 className={styles.heading} >Theatre Listing : </h1>
                {theatres}
            </div>
        )
    }
}

export default TheatreListing;
