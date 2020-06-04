import React, { Component } from 'react';
import styles from './stylesheets/AddShow.module.css'
class AddShow extends Component {
    render() {
        return (
            <div className={styles.AddShow}>
                <h1 className={styles.heading}>Add Show : </h1>
                <p className={styles.task}>
                    Enter the Movie Name: </p>

                <span className={styles.c}>
                    <input className={styles.inputbox}
                        type="text" name="Add Movie" placeholder="Movie Name" />
                    <input className={styles.submitbutton}
                        type="submit" value="Add Movie" />
                </span>

                <p className={styles.task}>
                    Enter the Theatre and Show Time : </p>
                <span className={styles.c}>
                    <input className={styles.inputbox}
                        type="text" name="Enter Theatre" placeholder="Theatre Name" />
                    <input className={styles.submitbutton} type="submit" value="Add Theatre" />
                </span>

                <span className={styles.c}>
                    <form>
                        <select classsName={styles.selectbox} id="Show Time" name="Show Time">
                            <option value="11">11 a.m</option>
                            <option value="2">2 p.m</option>
                            <option value="6">6 p.m</option>
                            <option value="9">9 p.m</option>
                        </select>
                    </form>
                    <input className={styles.submitbutton} type="submit" value="Add Show" />
                </span>
            </div>
        )
    }
}

export default AddShow;