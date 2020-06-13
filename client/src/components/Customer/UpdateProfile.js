import React, { Component } from 'react';
import axios from 'axios';

import styles from './stylesheets/MyProfile.module.css'

class UpdateProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            repassword: '',
            userType: '',
            
            errors: {}
        };
        this.safelyParseJSON = this.safelyParseJSON.bind(this)
        this.updateUserState = this.updateUserState.bind(this);
        this.UserUpdateAPIHandler = this.UserUpdateAPIHandler.bind(this);
        this.handleValidation = this.handleValidation.bind(this);
    }

    safelyParseJSON = (json) => {
        var parsed
        try {
            parsed = JSON.parse(json)
        } catch (e) {
            // Oh well, but whatever...
        }
        return parsed // Could be undefined!
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
        // let password = this.state.password;
        // let repass = this.state.repassword;
        // if (password.length === 0) {
        //     formIsValid = false;
        //     errors["password"] = "* Cannot be empty";
        // }
        // else if (password.length < 7) {
        //     formIsValid = false;
        //     errors["password"] = "* Password should contain 7 characters";
        // }
        // if(password!==repass)
        // {
        //     formIsValid = false;
        //     errors["password"] = "* Passwords don't match.";
        // }

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

    UserUpdateAPIHandler = (e) => {
        e.preventDefault();
        if (this.handleValidation()) {
            // console.log('validation successful!');
            console.log(this.state);
            const user = {
                name: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName
                },
                phoneNumber: this.state.phoneNumber,
                email: this.state.email,
                userType: this.state.userType,
                // gender : this.state.gender,
                // DOB : this.state.DOB
            };
            console.log(user)
            axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
            axios.put('http://localhost:3000/users/me', user)
                .then(response => {

                    console.log(response.data)
                    this.setState({
                        name: {
                            firstName: response.data.name.firstName,
                            lastname: response.data.name.lastName,
                        },
                        email: response.data.email,
                        userType: response.data.userType,
                        phoneNumber: response.data.phoneNumber,
                        // gender : response.data.gender,
                        // DOB : response.data.DOB
                        // password: currentUser.userType,
                        // repassword: '',
                        // errors: {}
                    })
                    console.log('state is', this.state)
                    console.log(response.data);
                    alert('Profile updated!')
                    localStorage.setItem("currentUser", JSON.stringify(response.data))
                    this.props.history.replace('/');
                    window.location.reload(false);
                }).catch((e) => alert(e));
        }
        else {
            alert("Form has errors.")
        }
    }

    componentDidMount() {
        const currentUserStorage = localStorage.getItem("currentUser");
        const currentUser = this.safelyParseJSON(currentUserStorage);
        console.log(currentUser)
        if(currentUser){
        this.setState({

            // firstName: currentUser.name.firstName,
            // lastName: currentUser.name.lastName,

            email: currentUser.email,
            phoneNumber: currentUser.phoneNumber,
            userType: currentUser.userType,
            // gender : currentUser.gender,
            // DOB : currentUser.DOB
            // password: currentUser.password,
        });
    }
    }

    render() {
        return (
            <div className={styles.profileBox}>
                <div className={styles.myName}>
                    <input type="text" name="firstName" value={this.state.firstName} onChange={this.updateUserState} className={styles.inputbox} id="myname" placeholder="First Name"></input>
                    <input type="text" name="lastName" value={this.state.lastName} onChange={this.updateUserState} className={styles.inputbox} id="mylastname" placeholder="Last Name"></input>
                </div>
                <div className={styles.mymobile}>
                    <input type="text" name="phoneNumber" value={this.state.phoneNumber} onChange={this.updateUserState} className={styles.inputbox} id="mobile" placeholder="Mobile"></input>
                </div>
                <div className={styles.email}>
                    <input type="text" name="email" value={this.state.email} onChange={this.updateUserState} className={styles.inputbox} id="email" placeholder="xyz@gmail.com"></input>
                    <br /><span className={styles.warning}>{this.state.errors["email"]}</span>
                </div>
                <div className={styles.password}>
                    {/* <div className={styles.mygender}>
                        <p className={styles.greywords}>Gender ?</p>
                        <input type="radio" name="gender" id="male" value="male" checked></input>
                        <label for="male" className={styles.genderlabel}>Male</label>
                        <input type="radio" name="gender" id="female" value="female"></input>
                        <label for="female" className={styles.genderlabel}>Female</label>
                        <input type="radio" name="gender" id="others" value="others"></input>
                        <label for="others" className={styles.genderlabel}>Others</label>
                    </div>
                    <div className={styles.mybd}>
                        <input type="date" name='DOB' value={this.state.DOB} id="mybirthday"></input>
                        <p className={styles.greywords}>It's my birthday</p>
                    </div> */}
                    {/* <p className={styles.genderlabel}>Change Password ?</p>
                    <input type="text" name="password" value={this.state.password} onChange={this.updateUserState} className={styles.inputbox} id="pass" placeholder="enter new password"></input>
                    <br /><span className={styles.warning}>{this.state.errors["password"]}</span><br /> */}
                    {/* <input type="text" className={styles.inputbox} id="repass" placeholder="re-enter new password to confirm"></input> */}
                </div>
                <div>
                    <select className={styles.usertype} value={this.state.userType} onChange={this.updateUserState} name="userType">
                        <option selected value="customer">Customer</option>
                        <option value="vendor">TheatreOwner</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <div>
                    <button type="submit" className={styles.submitbtn} onClick={this.UserUpdateAPIHandler}>Update</button>
                </div>
                <br /><br />
                {/* <div>
                    <Link to='/userDelete'>
                        <button type="submit" className={styles.submitbtn}>Delete Account</button>
                    </Link>
                </div> */}
            </div>
        )
    }
}

export default UpdateProfile;