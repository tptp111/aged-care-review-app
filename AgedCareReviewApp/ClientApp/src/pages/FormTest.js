import React, { Component } from 'react';
import authService from '../components/api-authorization/AuthorizeService'
import '../styles/pages/About.css';

export class FormTest extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(event) {
    const token = await authService.getAccessToken();
    alert('A name was submitted: ' + this.state.value);

    let weather = {
      "summary": this.state.value
    }

    fetch('WeatherForecast', {
      method: 'POST',
      headers: !token ? {} : {
         'Content-type':'application/json',
         'Authorization': `Bearer ${token}`
        },
      body: JSON.stringify(weather)
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Form Submission Example Page</h1>
        <p>This page demonstrates form submission to the back end. For the submission to work, the user must be logged in, otherwise the post request authorisation will fail.</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Message:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}