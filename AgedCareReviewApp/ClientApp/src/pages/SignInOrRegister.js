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

                        <div>

                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 order-lg-last order-sm-first order-first right-column-SOR'>
                        <h1 id='h1-SOR'>Reviews</h1>
                        <p>
                            <h3 id='h3-SOR'>Please Sign In or Register to leave a review</h3> 
                            
                        </p>
                        <div>
                                <button className='b b-primary'>Sign In</button>
                                <button className='b b-accent'>Register</button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}