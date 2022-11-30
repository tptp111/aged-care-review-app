import React, { Component } from 'react';
import '../styles/pages/ReviewConfirmation.css';
import {Link} from "react-router-dom";

export class ReviewConfirmation extends Component {
    static displayName = ReviewConfirmation.name;


    render() {
        return (
            <div className='col-lg-12 col-sm-12 rev-conf-column'>
                <img className='logo-img-rev-conf' src='/images/favicon.png' alt="image logo" width="200" height="185" />
                
                <h1 id="rev-conf-h1">Thank you for your feedback</h1>
                <p id="rev-conf-p">
                    Your review is greatly appreciated.
                </p>

                <p id="rev-conf-p">
                    Please note: All reviews undergo a moderation process before being listed on facility pages.  You will receive an
                    email with a receipt of your submission.  If you have any questions or if you would like to modify
                    or delete your review, you can follow the instructions enclosed within the email. 
                </p>

                <div>
                    <Link to="/Home">
                        <button className='b b-primary' id="rev-conf-button">Home</button>
                    </Link>
                </div>
            </div>
        );
    }
}