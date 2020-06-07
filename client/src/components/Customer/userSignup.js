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
            repassword: '',
            errors: {}
        }
        this.updateUserState = this.updateUserState.bind(this);
        this.createUserAPIHandler = this.createUserAPIHandler.bind(this);
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
        //let repass = this.state.repassword;
        // if(password!==repass)
        // {
        //     formIsValid = false;
        //     errors["password"] = "* Passwords don't match.";
        // }
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
        else if(typeof email !== "undefined"){
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

    createUserAPIHandler = (e) => {
        e.preventDefault()
        if (this.handleValidation()) {
            // console.log('validation successful!');
            // console.log(this.state);
            const user = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                mobile: this.state.mobile,
                email: this.state.email,
                password: this.state.password,
            };
            axios.post('http://localhost:3000/users/signup', user)
                .then(response => {
                    console.log('signed up!')
                    console.log(response.data)
                    localStorage.setItem("currentUser",JSON.stringify(response.data.user))
                    localStorage.setItem("token",response.data.token)
                    this.props.history.replace('/');
                    window.location.reload(false);
                }).catch((e) => alert(e));
            this.setState({
                firstname: '',
                lastname: '',
                email: '',
                mobile: '',
                password: '',
                repassword: ''
            })
        }
        else {
            alert("Form has errors.")
        }
    }

    render() {
        return (
            <div className={styles.loginbox}>
                <h2 className={styles.heading}> SignUp Here!</h2>
                <div className={styles.signup}>
                    <div className={styles.myName}>
                        <input type="text" name="firstname" value={this.state.firstname} onChange={this.updateUserState} className={styles.inputbox} id="myname" placeholder="First Name"></input>
                        <input type="text" name="lastname" value={this.state.lastname} onChange={this.updateUserState} className={styles.inputbox} id="mylastname" placeholder="Last Name"></input>
                    </div>

                    <div className={styles.email}>
                        <input type="text" name="email" value={this.state.email} onChange={this.updateUserState} className={styles.inputbox} placeholder="email@gmail.com"></input>
                        <br/><span className={styles.warning}>{this.state.errors["email"]}</span>
                    </div>

                    <div className={styles.mymobile}>
                        <input type="text" name="mobile" value={this.state.mobile} onChange={this.updateUserState} className={styles.inputbox} id="mobile" placeholder="Mobile"></input>
                    </div>

                    <div>
                        <p className={styles.genderlabel}>Enter Password</p>
                        <input type="text" name="password" value={this.state.password} onChange={this.updateUserState} className={styles.inputbox} id="pass" placeholder="enter password"></input>
                        <br/><span className={styles.warning}>{this.state.errors["password"]}</span>
                        {/* <input type="text" name="repassword" value={this.state.repassword} onChange={this.updateUserState} className={styles.inputbox} id="repass" placeholder="re-enter password to confirm"></input> */}
                    </div>

                    <button type="submit" className={styles.submitbtn} onClick={this.createUserAPIHandler}>Create new account</button>
                </div>
            </div >
        )
    }
}
export default UserSignup;