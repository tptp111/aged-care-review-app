import React, { Component } from 'react';
import '../styles/pages/SignInOrRegister.css';
import {Link} from "react-router-dom";

export class SignInOrRegister extends Component {
    static displayName = SignInOrRegister.name;


    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-lg-6 col-sm-12 left-column-SOR'>
                        <img className='elderlyImage2-img-SOR' src='/images/elderlyImage2.png' alt='Elderly Image 2'/>

                        <div>

                        </div>
                    </div>
                    <div className='col-lg-6 col-sm-12 right-column-SOR'>
                        <h1 id='h1-SOR'>Reviews</h1>
                        <p>
                            <h3 id='h3-SOR'>Please Sign In or Register to leave a review</h3> 
                            
                        </p>
                        <div>
                            <Link to="/SignIn">
                                <button className='b b-primary'>Sign In</button>
                            </Link>
                            <Link to="/Register">
                                <button className='b b-accent'>Register</button>
                            </Link>   
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}