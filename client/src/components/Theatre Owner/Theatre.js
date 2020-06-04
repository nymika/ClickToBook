import React from 'react';
import styles from "./stylesheets/Theatre.module.css"

const Theatre = (props) => (
            <div className={styles.movie}>
                <div >
                   
                
                    <h3 className={styles.title}>Title : {props.Title}</h3>
                    


                    <h3 className={styles.year}> Location : {props.Location}</h3>
                    <h3 className = {styles.Duration}>Screens :{props.Screens}</h3>
                    <span className = {styles.Genre}>{props.id}</span>
                    
                </div>
                </div>
            
        );
export default Theatre;