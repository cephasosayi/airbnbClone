import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
// import { SearchIcon }


const Header = () => {
  const history = useHistory();
  return (
    <div className='header'>
        <div>
          <Link to='/'>
             <img src='https://i.pinimg.com/564x/a4/51/73/a4517359b519d908928dac0c2db5e17e.jpg'
              className='header-icon' alt='airbnb logo'/>
              </Link>
        </div>

        <div className='header-center' >
            <input type='text'  />
            <SearchIcon />
        </div>

        <div className='header_right'>
          <p>Become a host</p>
          <LanguageIcon />
          <ExpandMoreIcon />
          <Avatar />
        </div>
    </div>
  )
}

export default Header