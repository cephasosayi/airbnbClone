import React from 'react'
import './searchResult.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

const SearchResult = ({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) => {
  return (
    <div className='searchresult'>
        <img src={img} alt='' />
        <FavoriteBorderIcon 
        className='searchresult-heart' />

        <div className='searchresult-info'>

           <div className='searchresult-infoTop'>
            <p>{location}</p>
            <h3>{title}</h3>
            <p>______</p>
            <p>{description}</p> 
            </div> 

           <div className='searchresult-infoBottom'>
               <div className='searchresult-stars'>
                   <StarIcon className='searchresult-star'/>
                   <p>
                       <strong>{star}</strong>
                   </p>
               </div>
               <div className='searchresult-price'>
                   <h2>{price}</h2> 
                   <p>{total}</p>
               </div>
            </div> 

        </div>
    </div>
  )
}

export default SearchResult