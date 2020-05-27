import React, { Component } from 'react';
import axios from 'axios';

import styles from './stylesheets/userLogin.module.css';

class UserSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
            repassword: ''
        }
        this.updateUserState = this.updateUserState.bind(this);
        this.createUserAPIHandler = this.createUserAPIHandler.bind(this);
    }

    updateUserState = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    createUserAPIHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        const user = {
            firstname: this.state.firstname,
            lastname : this.state.lastname,
            mobile : this.state.mobile,
            email: this.state.email,
            password: this.state.password,
        };
        axios.post('http://localhost:3001/users/signup', user)
            .then(response => {
                console.log(response.data)
            }).catch((e) => console.log(e));
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
            repassword: ''
        })
    }

    render() {
        return (
            <div className={styles.loginbox}>
                <h1 className={styles.heading}> SignUp Here!</h1>
                <div className={styles.signup}>
                    <div className={styles.myName}>
                        <input type="text" name="firstname" value={this.state.firstname} onChange={this.updateUserState} className={styles.inputbox} id="myname" placeholder="First Name"></input>
                        <input type="text" name="lastname" value={this.state.lastname} onChange={this.updateUserState} className={styles.inputbox} id="mylastname" placeholder="Last Name"></input>
                    </div>

                    <div className={styles.email}>
                        <input type="text" name="email" value={this.state.email} onChange={this.updateUserState} className={styles.inputbox} placeholder="email@gmail.com"></input>
                    </div>

                    <div className={styles.mymobile}>
                        <input type="text" name="mobile" value={this.state.mobile} onChange={this.updateUserState} className={styles.inputbox} id="mobile" placeholder="Mobile"></input>
                    </div>

                    <div>
                        <p className={styles.genderlabel}>Enter Password</p>
                        <input type="text" name="password" value={this.state.password} onChange={this.updateUserState} className={styles.inputbox} id="pass" placeholder="enter password"></input>
                        <input type="text" name="repassword" value={this.state.repassword} onChange={this.updateUserState}className={styles.inputbox} id="repass" placeholder="re-enter password to confirm"></input>
                    </div>

                    <button type="submit" className={styles.submitbtn} onClick={this.createUserAPIHandler}>Create new account</button>
                </div>
            </div >
        )
    }
}
export default UserSignup;