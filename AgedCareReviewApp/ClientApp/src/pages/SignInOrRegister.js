import React, { Component } from 'react';
import '../styles/pages/SignInOrRegister.css';
import {Link} from "react-router-dom";
import { ApplicationPaths } from '../components/api-authorization/ApiAuthorizationConstants';

export class SignInOrRegister extends Component {
    static displayName = SignInOrRegister.name;


    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 order-lg-first order-sm-last left-column-SOR'>
                        <img className='elderlyImage2-img-SOR' src='/images/elderlyImage2.png' alt='Elderly Image 2'/>
                    </div>
                    <div className='col-lg-6 col-sm-12 order-lg-last order-sm-first order-first right-column-SOR'>
                        <img className='logo-img-SOR' src='/images/favicon.png' alt="image logo" width="200" height="185" />
                        
                        <h1 id='h1-SOR'>Reviews</h1>
                        <h3 id='h3-SOR'>Please Sign In or Register to leave a review</h3>
                        <div>
                            <Link to={ApplicationPaths.Login}>
                                <button className='b b-primary'>Sign In</button>
                            </Link>
                            <Link to={ApplicationPaths.Register}>
                                <button className='b b-accent'>Register</button>
                            </Link>   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}