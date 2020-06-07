import React from 'react';
import styles from "./stylesheets/Theatre.module.css"

const Theatre = (props) => (
    <div className={styles.movie}>
        <div >

            <h3 className={styles.title}>Title : {props.Title}</h3>
            <br></br><br></br>
            <h3 className={styles.year}> Location : {props.street}, {props.city}, {props.state}, {props.country}</h3>
            <h3 className={styles.Duration}>Screens :{props.Screens}</h3>
            <h3 className={styles.theatreInfo} >Gold seats : {props.Aseat}, Balcony seats : {props.Bseat}</h3>
            <h3 className={styles.theatreInfo} > Lease Info : {props.startDate} - {props.lastDate}</h3>
            {/* <span className={styles.Genre}>{props.id}</span> */}

        </div>
    </div>

);
export default Theatre;