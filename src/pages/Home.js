import Card from '../component/Card';
import React from 'react'
import Banner from '../component/Banner';
import './home.css';
const Home = () => {
  return (
    <div className='home'>
        {/* <h1>Home Component</h1> */}
        <Banner />
        <div className='home-section'>
          <Card
          src='https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'
          title='Entire homes'
          description='Comfortable private places, with room for friends or family'
          
          />
          <Card
          src='https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'

          title='Private home'
          description='Comfortable private places, with room for friends or family'
          
          />
         <Card
          src='https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg'
          title='Luxury homes'
          description='Comfortable private places, with room for friends or family'
          
          />
        </div>

        <div className='home-section'>
        <Card
          src='https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'
          title='Entire homes'
          description='Comfortable private places, with room for friends or family'
          price='N2500/night'
          
          />
          <Card
          src='https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'

          title='Private home'
          description='Comfortable private places, with room for friends or family'
          price='N5500/night'
          
          />
         <Card
          src='https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg'
          title='Luxury homes'
          description='Comfortable private places, with room for friends or family'
          price='N4000/night'
          
          />
        </div>

        
    </div>
  )
}

export default Home