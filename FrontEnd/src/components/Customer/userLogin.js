import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './stylesheets/userLogin.module.css';

class UserLogin extends Component {
    render() {
        return (
            <div className={styles.loginbox}>
                <h1 className={styles.heading}>Login Here!</h1>
                <div className={styles.login}>
                    <div>
                        <p>Email ? </p>
                        <input className={styles.inputbox} type="text" placeholder="email@gmail.com"></input>
                    </div>
                    <input className={styles.inputbox} type="password" placeholder="password"></input>
                    <button type="submit" className={styles.submitbtn}>Login</button>
                </div>
                <Link to="/userSignup"><h1 className={styles.heading}>Create new Account!</h1></Link>
            </div>
        )
    }
}
export default UserLogin;