import React, {Component } from 'react';
//import {BrowserRouter, Link, Route} from 'react-router-dom';

import styles from './stylesheets/MyProfile.module.css'

class UpdateProfile extends Component {
    render() {
        return (
                <div className = {styles.profileBox}>
                   <div className = {styles.myName}>
                       <input type="text" className={styles.inputbox} id="myname" placeholder="First Name"></input>
                       <input type="text" className={styles.inputbox} id="mylastname" placeholder="Last Name"></input>
                   </div>
                   <div className = {styles.mymobile}>
                       <input type="text" className={styles.inputbox} id="mobile" placeholder="Mobile"></input>
                   </div>
                   <div className = {styles.email}>
                       <input type="text" className={styles.inputbox} id="email" placeholder="xyz@gmail.com"></input>
                   </div>
                   <div className = {styles.password}>
                   <div className = {styles.mygender}>
                       <p className={styles.greywords}>Gender ?</p>
                       <input type="radio" name="gender" id="male" value="male" checked></input>
                       <label for="male" className={styles.genderlabel}>Male</label>
                       <input type="radio" name="gender" id="female" value="female"></input>
                       <label for="female" className={styles.genderlabel}>Female</label>
                       <input type="radio" name="gender" id="others" value="others"></input>
                       <label for="others" className={styles.genderlabel}>Others</label>
                   </div>
                   <div className = {styles.mybd}>
                       <input type="date" id="mybirthday"></input>
                       <p className={styles.greywords}>It's my birthday</p>
                   </div>
                   <p className={styles.genderlabel}>Change Password ?</p>
                       <input type="text" className={styles.inputbox} id="pass" placeholder="enter new password"></input>
                       <input type="text" className={styles.inputbox} id="repass" placeholder="re-enter new password to confirm"></input>
                   </div>
                   <button type="submit" className={styles.submitbtn}>Update</button>
               </div>
        )
    }
}

export default UpdateProfile;