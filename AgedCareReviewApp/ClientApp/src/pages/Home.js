import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-lg-5 col-sm-12 home-left-column'>
            <img className='logo-img' src='/images/favicon.png' />
            <h2>Transparent Aged Care Reviews</h2>
            <h3>Search for an aged care review or provide feedback on a facility</h3>
            <div>
                <button className='b b-primary'>Search</button>
              <Link to="/SignInOrRegister">
                <button className='b b-accent'>Review</button>
              </Link>
            </div>
          </div>
          <div className='col-lg-7 col-sm-12 home-right-column'>
            <img className='landing-img' src='/images/landing.png' alt='An aged care resident and her carer'/>
          </div>
        </div>
      </div>
    );
  }
}
