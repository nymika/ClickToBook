import React, {Component } from 'react';
import styles from './stylesheets/AddTheatre.module.css'
class AddTheatre extends Component {
    render() {
        return (
            <div className = {styles.AddTheatre}>
            <h1 className={styles.heading} >Add Theatre : </h1>
            <p className={styles.task}> Enter the Theatre Name : </p>
            
            <input className={styles.inputbox}
            type="text" name="Enter Theatre" placeholder="Theatre Name"/>
            <input className={styles.submitbutton} 
            type="submit" value="Add Theatre"/>
            </div>
            
            
        )
    }
}

export default AddTheatre;