import { Button } from '@mui/material';
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import './Banner.css';
import Search from './Search';

const Banner = () => {
  const history = useHistory()
    const [showSearch, setShowSearch] = useState(false)
  return (
    <div className='banner'>
        <div className='banner-search'>
            { showSearch && <Search />}
            <Button onClick={() => { setShowSearch(!showSearch)}} 
            variant='outline' className='banner-searchButton'>
                { showSearch ? 'Hide' : 'Search Date'}
                </Button>
        </div>
          <div className='banner-info'>
            <h1>Get out and stretch your imagination</h1>
            <h5>
                Plan a different kind of gateway to uncover the hidden gems near you
            </h5>
            <Button variant='outlined' onClick={() => history.push('/search')}>Explore Nearby </Button>
            </div>         
    </div>
  )
}

export default Banner