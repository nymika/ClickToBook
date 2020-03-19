import React from 'react';
import "../stylesheets/Movie.css";

class Movie extends React.Component {
    render() {
        const {Title, Poster, Year} = this.props;
        return (
            <div className="movie">
                <div >
                    <img src={Poster} alt="my movie poster" className="poster"/>
                </div>
                <div className="title-year">
                    <h3 className="title">{Title}</h3>
                    <h4 className="year">YEAR {Year}</h4>
                </div>
            </div>
        )
    }
}
export default Movie;