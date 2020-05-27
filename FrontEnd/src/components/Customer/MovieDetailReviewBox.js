import React, {Component } from 'react';
import styles from './stylesheets/MovieDetailPage.module.css';

class MovieDetailReviewBox extends Component {
    render() {
        return (
            <div>
                <div className={styles.SingleReviewBox}>
                    <div className={styles.UserNameBox}>
                        <h4 className={styles.UserName}>UserName</h4>
                    </div>
                    <div>
                        <p className={styles.UserReview}>hsfcbruhvydtgdhfvbrkugjnxvxgsmrjv xjbggrsgb </p>
                    </div>
                </div>
                <div className={styles.SingleReviewBox}>
                    <div className={styles.UserNameBox}>
                        <h4 className={styles.UserName}>UserNamegysucdvuwsbdhcsi</h4>
                    </div>
                    <div>
                        <p className={styles.UserReview}>hsfcbruhvydtgdhfvbrkugjnxvxgsmrjv xjbggrsgb </p>
                    </div>
                </div>
                <div className={styles.SingleReviewBox}>
                    <div className={styles.UserNameBox}>
                        <h4 className={styles.UserName}>UserNamegysucdvuwsbdhcsi</h4>
                    </div>
                    <div>
                        <p className={styles.UserReview}>hsfcbruhvydtgdhfvbrkugjnxvxgsmrjv xjbggrsgb </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetailReviewBox;