import * as React from 'react';
import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import '../styles/pages/Search.css';


export function Search() {
    const inputRef = useRef(null);
    const [selected, setSelected] = useState([]);
    const handleClick = () => {
        setSelected(inputRef.current.value);
    };

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
                            onChange={(event, value) => console.log(value)}
                            required={true}
                            type="text"
                            className="autocomplete-input"
                            sx={{ width: 350 }}
                            options={suburbs}
                            autoHighlight
                            getOptionLabel={(option) => option.suburb_name + ", " + option.postcode}
                            renderOption={(props, option) => (
                                <Box component="li"
                                     sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    <img
                                        loading="lazy"
                                        width="20"
                                        src={`https://flagcdn.com/w20/${option.suburb_name.toLowerCase()}.png`}
                                        srcSet={`https://flagcdn.com/w40/${option.suburb_name.toLowerCase()}.png 2x`}
                                        alt=""
                                    />
                                    {option.suburb_name}, {option.postcode}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    inputRef={inputRef}
                                    id="postcode"
                                    label="Postcode or suburb name"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disables autocomplete and autofill
                                    }}
                                />
                            )}
                        />
                        <button
                            id="search-button"
                            onClick={handleClick}
                            className="form-submit-button">
                            <p>SEARCH</p>
                        </button>
                        <div className='search-secondary'>
                            Display postcode input (sample): {selected}
                        </div>
                    </div>
                </div>
            </div>
    );
}

const suburbs = [
    {
        postcode: "3000",
        suburb_name: "Melbourne",
        state_name:"Victoria",
        state_code:"VIC",
        latitude:-37.814,
        longitude:144.9633,
    },
    {
        postcode: "3056",
        suburb_name: "Brunswick",
        state_name:"Victoria",
        state_code:"VIC",
        latitude:-37.7667,
        longitude:144.9667,
    },
    {
        postcode: "3070",
        suburb_name: "Northcote",
        state_name:"Victoria",
        state_code:"VIC",
        latitude:-37.7667,
        longitude:145,
    },
];

