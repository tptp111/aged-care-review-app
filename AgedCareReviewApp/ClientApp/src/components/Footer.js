import React, { Component } from "react";
import { Navbar, NavbarBrand } from 'reactstrap';
import '../styles/components/Footer.css';

export class Footer extends Component {
  render () {
    return (
      <div className="footer">
        <p className="footer-text">Aged Care Reviews Australia</p>
      </div>
    )
  }
}