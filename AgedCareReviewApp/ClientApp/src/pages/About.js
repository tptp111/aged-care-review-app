import React, { Component } from 'react';
import '../styles/pages/About.css';

export class About extends Component {
  static displayName = About.name;

  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-lg-5 col-sm-12 about-left-column order-lg-first order-sm-last'>
            <img className='about-img' src='/images/ElderlyImage2.png' alt='Elderly person and their carer'/>
          </div>
          <div className='col-lg-7 col-sm-12 about-right-column order-lg-last order-sm-first order-first'>
            <h1 className='about-heading'>About Us</h1>
                <p className='about-text'>
                  Aged Care Consumer Reviews Australia (ACCRA) is a website for current and prospective aged care residents. Current residents (and/or their representative/s) can create an account to provide feedback on their aged care residence. Prospective aged care residents can search for facilities near them, filter based on their priorities, and view reviews on all facilities. <br/><br/> 
                  Our mission is to provide transparency and accountability in the aged care sector. Through this, we can help to ensure that older Australians residents get the quality of care they deserve. Our service is accessible and reliable, empowering our users to make decisions for themsleves. <br/><br/>
                  ACCRA is sponsored by the Australian Government Department of Health and Aged Care. ACCRA serves to address reccomendations from the Royal Commission into Aged Care Quality and Safety (2021).
                </p>
          </div>
        </div>
      </div>
    );
  }
}