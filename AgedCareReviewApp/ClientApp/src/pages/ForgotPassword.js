import React, { Component } from 'react';
import '../styles/pages/ForgotPassword.css';
import {Link} from "react-router-dom";

export class ForgotPassword extends Component {
    static displayName = ForgotPassword.name;


    render() {
        return (
            <div className="text-center m-5-auto forgot-password">
                <img className='logo-img' src='/images/favicon.png' alt="image logo" width="200" height="185" />
                <p>
                   
                </p>
                
                <h2 id="heading2-FP">Enter your email address and we will send you a new password</h2>
                <form action="/SignIn">
                    <p>
                        <label> </label><br/>
                        <input id="FP-email" type="email" placeholder="Enter your email address here." name="email" required />
                    </p>
                    <p>
                        <button className='b b-primary'>Send password to reset email</button>
                    </p>
                </form>
                <footer>
                    <p>First time? <Link to="/Register">Register to create an account</Link>.</p>
                </footer>
            </div>
        )
    }
}