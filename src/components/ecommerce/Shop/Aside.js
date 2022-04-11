import React from 'react'
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { deepOrange, grey } from '@mui/material/colors';

const Aside = ({value, setValue, type, setType}) => {

    const handleChangeType = (event) =>{
        setType(event.target.value)
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <h3>Search Here...</h3>
            <form action="">
                <input type="text" placeholder='Search here...' />
            </form>
            <div className='shop__priceRange'>
                <h3>Price range</h3>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    min={0}
                    max={2500}
                    value={value}
                    color="warning"
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                />
            </div>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                    value={type}
                    onChange={handleChangeType}
                >
                    <FormControlLabel value="tv" control={<Radio sx={{color:grey[600], '&.Mui-checked': {color:deepOrange[500]}, }} />} label="Smart TV" />
                    <FormControlLabel value="computers" control={<Radio sx={{color:grey[600], '&.Mui-checked': {color:deepOrange[500]}, }} />} label="Computers" />
                    <FormControlLabel value="smartphones" control={<Radio sx={{color:grey[600], '&.Mui-checked': {color:deepOrange[500]}, }} />} label="Smartphones" />
                    <FormControlLabel value="remove"  control={<Radio  sx={{color:grey[600], '&.Mui-checked': {color:deepOrange[500]}, }} />} label="Remove filter"  />
                </RadioGroup>
            </FormControl>
        </>
    )
}

export default Aside