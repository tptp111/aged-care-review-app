import React, { Component } from 'react';
import '../styles/pages/About.css';

export class About extends Component {
  static displayName = About.name;

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-lg-7 col-sm-12 about-left-column'>
            <div className='about-text'>
              <h1>About Us</h1>
              <div className='about-text-box'>
                <h3>Who Are We?</h3>
                <p>
                  Aged Care Reviews Australia is an independent organisation aiming to provide consumer-centric reviews on aged care facilities in Australia.
                </p>
              </div>
              <div className='about-text-box'>
                <h3>Why Do We Exist?</h3>
                <p>
                  In Australia, there is an ever increasing demand for aged care placements and an increased proliferation of aged care facilities. 
                  Due to ongoing concerns relating to the safety and quality of care in the aged care sector, there is an increasing need to give a voice to aged care residents. 
                  There concerns were most recently brought to light by the Australian Royal Commission into Aged Care Quality and Safety.<br/>
                  We hope to provide a platform where residents (and their representatives) can share both their experiences at aged care facilities in an open and honest environment.
                  The desired outcome is to provide greater transparency within the aged care industry and empower individuals to make informed decisions when moving into a facility.
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-sm-12 about-right-column'>
            <img className='about-img' src='/images/favicon.png' alt='ACCRA Logo'/>
          </div>
        </div>
      </div>
    );
  }
}