import { Button } from '@mui/material';
import React from 'react'
import SearchResult from '../component/searchResult';
import './Searchpage.css';

const SearchPage = () => {
  return (
    <div className='searchPage'>
       <div className='searchpage-info'>
         <p> 62 stays - 26 guest to 30 august - 2 guest</p>
         <h1>stays nearby</h1>
         <Button variant='outlined'> Cancellation flexibility</Button>
         <Button variant='outlined'>Type of place</Button>
         <Button variant='outlined'>Rooms and beds</Button>
         <Button variant='outlined'>More Filters</Button>

       </div>
       <SearchResult
         img='https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg'
         location='Private room in Abuja'
         title='Stay at this specious House'
         description='1 guess  1 bedroom - 1 bed - 1,5 shared bathroom
          - wifi - kitchen - free parking - washing machine'
         star={4.77}
         price='N30/ night'
         total='N12000 total'
          />

        <SearchResult
         img='https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg'
         location='Private room in Abuja'
         title='Stay at this specious House'
         description='1 guess  1 bedroom - 1 bed - 1,5 shared bathroom 
         - wifi - kitchen - free parking - washing machine'
         star={4.77}
         price='N30/ night'
         total='N12000 total'
          />

        <SearchResult
         img='https://images.pexels.com/photos/271654/pexels-photo-271654.jpeg'
         location='Private room in Abuja'
         title='Stay at this specious House'
         description='1 guess  1 bedroom - 1 bed - 1,5 shared bathroom 
         - wifi - kitchen - free parking - washing machine'
         star={4.55}
         price='N30/ night'
         total='N12000 total'
          />
    </div>
  )
}

export default SearchPage