import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import authService from '../components/api-authorization/AuthorizeService';
import '../styles/pages/Home.css';

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    };
  }

  componentDidMount() {
    this._subscription = authService.subscribe(() => this.populateState());
    this.populateState();
  }

  componentWillUnmount() {
    authService.unsubscribe(this._subscription);
  }

  async populateState() {
    const [isAuthenticated] = await Promise.all([authService.isAuthenticated()])
    this.setState({
      isAuthenticated
    });
  }

  static displayName = Home.name;

  render() {
    const { isAuthenticated } = this.state;
    if (!isAuthenticated) {
      return this.anonymousView();
    } else {
      return this.authenticatedView();
    }
  }

  authenticatedView() {
    return (<Fragment>
      <div>
        <div className='row'>
          <div className='col-lg-5 col-sm-12 home-left-column'>
            <img className='logo-img' src='/images/favicon.png' />
            <h3>Aged Care Consumer Reviews Australia</h3>
            <h5>Search for an aged care facility to view their reviews and/or provide feedback</h5>
            <div>
              <Link to="/Search">
                <button className='b b-primary'>Search for a facility</button>
              </Link>
            </div>
          </div>
          <div className='col-lg-7 col-sm-12 home-right-column'>
            <img className='landing-img' src='/images/landing.png' alt='An aged care resident and her carer'/>
          </div>
        </div>
      </div>
    </Fragment>);
  }

  anonymousView() {
    return (
    <Fragment>
      <div>
        <div className='row'>
          <div className='col-lg-5 col-sm-12 home-left-column'>
            <img className='logo-img' src='/images/favicon.png' />
            <h3 className="home-heading">Aged Care Consumer Reviews Australia</h3>
            <h5 className="home-subheading">Search for an aged care facility to view their reviews and/or provide feedback</h5>
            <div className='home-buttons'>
              <Link to="/Search">
                <button className='b b-primary'>Search for a facility</button>
              </Link>
              {/* <Link to="/SignInOrRegister">
                <button className='b b-accent'>Sign in to leave a review</button>
              </Link> */}
            </div>
          </div>
          <div className='col-lg-7 col-sm-12 home-right-column'>
            <img className='landing-img' src='/images/landing.png' alt='An aged care resident and her carer'/>
          </div>
        </div>
      </div>
    </Fragment>
    );
  }
}
