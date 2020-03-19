import React, {Component } from 'react';
import '../stylesheets/MovieDetailPage.css';

class MovieDetailSummary extends Component {
    render() {
        return (
            <div>
                <p className="Movie-Description">Ajax, a twisted scientist, experiments on Wade Wilson, a mercenary, to cure him of cancer and give him healing powers. However, the experiment leaves Wade disfigured and he decides to exact revenge.</p>
                <p>Date of Release :</p>
                <p>Duration : </p>
                <p>Starring : Ryan Reynolds, Morena Baccarin, Ed Skrein, T. J. Miller</p>
                <p>Directed : Tim Miller</p>
            </div>
        )
    }
}

export default MovieDetailSummary;