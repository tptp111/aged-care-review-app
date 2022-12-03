import React, { Component } from "react";
import "../styles/components/SlideBar.css";

export class SlideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      index: props.index,
    };

    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(event) {
    this.setState({
      value: event.target.value,
      index: this.props.index,
    });
    this.props.onChange(event);
  }

  render() {
    return (
      <div className="slide-bar-component">
        <div className="slide-bar-and-ticks">
          <input
            className="slide-bar-range"
            type="range"
            id={this.state.index}
            name="range"
            min="0"
            max="10"
            step="1"
            list="tickmarks"
            value={this.state.value}
            onChange={this.updateValue}
          />

          <datalist id="tickmarks">
            <option className="tick">0</option>
            <option className="tick">1</option>
            <option className="tick">2</option>
            <option className="tick">3</option>
            <option className="tick">4</option>
            <option className="tick">5</option>
            <option className="tick">6</option>
            <option className="tick">7</option>
            <option className="tick">8</option>
            <option className="tick">9</option>
            <option className="tick">10</option>
          </datalist>
        </div>
        <p id="ratingNumber">Rating: {this.state.value}</p>
      </div>
    );
  }
}
