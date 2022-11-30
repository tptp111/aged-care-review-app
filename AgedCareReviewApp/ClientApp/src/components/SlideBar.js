import React, { Component } from 'react';
import '../styles/pages/Review.css';

export class SlideBar extends Component {


    constructor (props) {
        super(props);
        
        this.state = {
            value: 0
        };
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(event) {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div className="slider">
                <div>
                <input type="range" id="range" name="range" min="0" max="10" step="1" list="tickmarks" 
                       value={this.state.value} onChange={this.updateValue}/>
                
                <datalist id="tickmarks">
                    <option value="0" label="0"></option>
                    <option value="1" label="1"></option>
                    <option value="2" label="2"></option>
                    <option value="3" label="3"></option>
                    <option value="4" label="4"></option>
                    <option value="5" label="5"></option>
                    <option value="6" label="6"></option>
                    <option value="7" label="7"></option>
                    <option value="8" label="8"></option>
                    <option value="9" label="9"></option>
                    <option value="10" label="10"></option>
                </datalist>
                </div>
                <p id="ratingNumber">  {this.state.value}</p>
            </div>
        );
    }
}
