import React, { Component } from 'react';
import '../styles/pages/SignIn.css';
import {Link} from "react-router-dom";

export class SignIn extends Component {
    static displayName = SignIn.name;


    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 left-column-signIn'>
                        <img className='elderlyImage2-img-signIn' src='/images/elderlyImage2.png' alt='Elderly Image 2'/>

                        <div>

                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 right-column-signIn'>
                        <h1 id="Sign-in-h1">Sign in</h1>

                        <h3 id="Sign-in-h3">Please sign in to leave a review.</h3>
                        <form action="/home">

                            <p id='signin-p'>
                                <label>Email address</label><br/>
                                <input id="signIn-input" type="email" placeholder="Please enter your email address" name="email" required />
                            </p>
                            <p id='signin-p'>
                                <label>Password</label><br/>
                                <input id="signIn-input" type="password" placeholder="Please enter your password" name="password" required />
                            </p>
                            <p>
                                <Link to="/ForgotPassword"><label className="right-label">Forgot password?</label></Link>
                            </p>
                            <p>
                                <button className='b b-primary'>Sign in</button>
                            </p>
                            <p>
                                Don't have an account?
                                <Link to="/Register">
                                    <span> <a>Click here to register</a></span>.
                                </Link>
                            </p>
                        </form>



                    </div>
                </div>
            </div>
        );
    }
}