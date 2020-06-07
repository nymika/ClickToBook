import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import styles from './stylesheets/userLogin.module.css';

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.updateUserState = this.updateUserState.bind(this);
        this.UserLoginAPIHandler = this.UserLoginAPIHandler.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    updateUserState = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;

        //Password
        let password = this.state.password;
        if (password.length === 0) {
            formIsValid = false;
            errors["password"] = "* Cannot be empty";
        }
        else if (password.length < 7) {
            formIsValid = false;
            errors["password"] = "* Password should contain 7 characters";
        }

        //Email
        let email = this.state.email;
        if (email.length === 0) {
            formIsValid = false;
            errors["email"] = "* Cannot be empty";
        }
        else if (typeof email !== "undefined") {
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "* Email is not valid";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    UserLoginAPIHandler = (e) => {
        e.preventDefault()
        if (this.handleValidation()) {
            console.log('validation successful!');
            console.log(this.state);
            const user = {
                email: this.state.email,
                password: this.state.password,
            };
            axios.post('http://localhost:3000/users/login', user)
                .then(response => {
                    console.log('logged in!')
                    console.log(response.data)
                    localStorage.setItem("currentUser",JSON.stringify(response.data.user))
                    localStorage.setItem("token",response.data.token)
                    this.props.history.replace('/');
                    window.location.reload(true);
                }).catch((e) => alert(e));
            this.setState({
                email: '',
                password: '',
            })
        }
        else {
            alert("Form has errors.")
        }
        this.loggedIn=true;
    }

    

    render() {
        return (
            <div className={styles.loginbox}>
                <h2 className={styles.heading}>Login Here!</h2>
                <div className={styles.login}>
                    <div className={styles.email}>
                        <p > Email ? </p>
                        <input type="text" name="email" value={this.state.email} onChange={this.updateUserState} className={styles.inputbox} placeholder="email@gmail.com"></input>
                        <br /><span className={styles.warning}>{this.state.errors["email"]}</span>
                    </div>
                    <input type="text" name="password" value={this.state.password} onChange={this.updateUserState} className={styles.inputbox} id="pass" placeholder="enter password"></input>
                    <br /><span className={styles.warning}>{this.state.errors["password"]}</span>
                    <button type="submit" className={styles.submitbtn} onClick={this.UserLoginAPIHandler}>Login</button>
                </div>
                <Link to="/userSignup"><h2 className={styles.heading}>Create new Account!</h2></Link>
            </div>
        )
    }
}
export default UserLogin;