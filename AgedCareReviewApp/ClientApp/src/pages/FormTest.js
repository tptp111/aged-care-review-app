import React, { Component } from 'react';
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

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);

    let weather = {
      "summary": this.state.value
    }

    fetch('WeatherForecast', {
      method: 'POST',
      headers: {'Content-type':'application/json'},
      body: JSON.stringify(weather)
    });
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}