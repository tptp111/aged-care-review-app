import React, { Component } from 'react';
import { LoginMenu } from './api-authorization/LoginMenu';
import {Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/components/NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar dark className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" container light>
          <NavbarBrand className="text-light" tag={Link} to="/">
            <img className='logo' src='/images/favicon_white.png'/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/">HOME</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/about">ABOUT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/search">SEARCH</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-light" to="/facility-search-results">SEARCH RESULTS</NavLink>
              </NavItem>
              <LoginMenu>
              </LoginMenu>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
