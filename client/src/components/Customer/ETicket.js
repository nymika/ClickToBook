import React from 'react';
import styles from "./stylesheets/ETicket.module.css";

const ETicket = (props) => (
    <div className={styles.ticketbox}>
       <div className={styles.ticket}>
            <div>
                <img src={props.Poster} alt="my movie poster" className={styles.poster} />
            </div>
            <div className={styles.ticketdetails}>
                <div className={styles.titlebox}>
                    <h3 className={styles.title}>{props.Title}  ( {props.dimen} , {props.language} ) </h3>
                </div>
                <div className={styles.theatretimedate}>
                    <p className={styles.theatre}>{props.Theatre}  |  {props.time}  |  {props.date}</p>
                </div>
                <p>Quantity - {props.numofseats}</p>
                <h3 className={styles.seats}>BALCONY - {props.seats}</h3>
                <p>Ticket Price     - {props.ticketprice}</p>
                <p>Convenience fees - {props.conveniencefees}</p>
                <p>Amount to pay    - {props.amountpaid}</p>
            </div>
        </div>
        <div className={styles.idDetails}>
            <h5 className={styles.idName}>Booking Id  - </h5>
            <h5 className={styles.idValue}> {props.bookingid} </h5>
            <h5 className={styles.idName}>  |  Booking Date & Time - </h5>
            <h5 className={styles.idValue}>{props.bookingdatetime}  </h5>
            <h5 className={styles.idName}> |  Confirmation Id  - </h5>
            <h5 className={styles.idValue}>{props.confirmationid}</h5>
        </div>
    </div>
);

export default ETicket;