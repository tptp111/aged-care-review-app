import React, { Component } from 'react';
import '../styles/pages/Register.css';
import {Link} from "react-router-dom";

export class Register extends Component {
    static displayName = Register.name;


    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 left-column-register'>
                        <img className='elderlyImage3-img-register' src='/images/elderlyImage3.png' alt='Elderly Image 3'/>

                        <div>

                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <h1 className='register-h1'>Register to create a new account</h1> 

                        <h4>Please ensure all details are accurate. Details provided will be used to validate
                        the aged care residence.</h4>
                        <form action="/home">
                            <p>
                                <label>First Name</label><br/>
                                <input id="register-input" type="text" placeholder="Please enter your first name" name="first_name" required />
                            </p>
                            <p>
                                <label>Last Name</label><br/>
                                <input id="register-input" type="text" placeholder="Please enter your last name" name="last_name" required />
                            </p>
                            <p>
                                <label>Medicare Card Number</label><br/>
                                <input id="register-input" type="text" placeholder="Please enter your Medicare card number" name="medicare_card_number" required />
                            </p>
                            <p>
                                <label>Email address</label><br/>
                                <input id="register-input" type="email" placeholder="Please enter your email address" name="email" required />
                            </p>
                            <p>
                                <label>Password</label><br/>
                                <input id="register-input" type="password" placeholder="Please enter a password" name="password" required />
                            </p>
                            <p>
                                <label>Confirm password</label><br/>
                                <input id="register-input" type="confirmPassword" placeholder="Please re-enter a password" name="confirmPassword" required />
                            </p>
                            <p>
                                <input id="register-checkbox" type="checkbox" name="checkbox" required /> I have read and accept the ACCRA <Link to="/TermsOfUse"> <span> <a>Terms Of Use</a></span>.</Link>
                            </p>
                            <p>
                                <button className='b b-primary'>Register</button>
                            </p>
                            <p>
                                Already have an account?
                                <Link to="/SignIn">
                                    <span> <a>Click here to sign in</a></span>.
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}