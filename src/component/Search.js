import React, { useState } from 'react'
import './Search.css';
import PeopleIcon from '@mui/icons-material/People';
// for react date install react date range 
import { DateRangePicker} from 'react-date-range';
import { Button } from '@mui/material';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useHistory } from 'react-router-dom';

const Search = () => {
    const history = useHistory()
    const [ startDate, setStartDate ] = useState(new Date());
    const [endDate, setEndDate] = useState( new Date());

    // selection range from the module 
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    // this function sets your selection to the selected date 
    // default from the module 
    function handleSelect(range){
        setStartDate(range.selection.startDate);
        setEndDate(range.selection.endDate);
    }
  return (
    <div className='search'>
        <DateRangePicker ranges={
            [selectionRange]} onChange={handleSelect} 
           
        />
        <h2>
            Number of Guests
            <PeopleIcon />
        </h2>
        <input min={0}
        defaultValue={2}
        type='number' />
        <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
    </div>
  )
}

export default Search