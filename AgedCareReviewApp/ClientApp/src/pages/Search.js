import * as React from 'react';
import {Component, useRef, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../styles/pages/Search.css';
import {Link, Navigate, useNavigate} from 'react-router-dom';

export class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {postcode: "0000"};
        this.updateValue = this.updateValue.bind(this);
    }
    
    updateValue(event, value) {
        this.setState({postcode: value})
    }

    render() {

        return (
            <div className='row'>
                <div className='col-lg-5 col-sm-12 search-left-column'>
                    <img className='search-img' src='/images/search.png' alt='Search Image'/>
                </div>
                <div className='col-lg-7 col-sm-12 search-right-column'>
                    <div className='search-main'>
                        <p>Where are you looking?</p>
                        <div className='search-secondary'>
                            <em>Please enter a suburb or postcode</em>
                        </div>
                        <Autocomplete
                            onChange={(event, value) =>
                                this.updateValue(event, value.postcode)
                            }
                            required={true}
                            type="text"
                            className="autocomplete-input"
                            sx={{width: 350}}
                            options={suburbs}
                            autoHighlight
                            getOptionLabel={(option) => option.suburb_name + ", " + option.postcode}
                            renderOption={(props, option) => (
                                <Box component="li"
                                     sx={{'& > img': {mr: 2, flexShrink: 0}}} {...props}>
                                    {option.suburb_name}, {option.postcode}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    // inputRef={inputRef}
                                    id="postcode"
                                    label="Postcode or suburb name"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disables autocomplete and autofill
                                    }}
                                />
                            )}
                        />

                        <Link to={'/facilitysearchresult/' + this.state.postcode} >
                        <button
                            id="search-button"
                            className="form-submit-button">
                            <p>SEARCH</p>
                        </button>
                        </Link>
                        <div className='search-secondary'>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const suburbs = [
    {
        postcode: "3000",
        suburb_name: "Melbourne",
        state_name: "Victoria",
        state_code: "VIC",
        latitude: -37.814,
        longitude: 144.9633,
    },
    {
        postcode: "3056",
        suburb_name: "Brunswick",
        state_name: "Victoria",
        state_code: "VIC",
        latitude: -37.7667,
        longitude: 144.9667,
    },
    {
        postcode: "3070",
        suburb_name: "Northcote",
        state_name: "Victoria",
        state_code: "VIC",
        latitude: -37.7667,
        longitude: 145,
    },
];

