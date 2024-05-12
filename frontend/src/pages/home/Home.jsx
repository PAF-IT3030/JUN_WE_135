import React from 'react'
import Workoutcard from '../workoutCard/Workoutcard'
import profileimage from '../../images/profileimage.jpg'
import './Home.css'


function Home() {
  return (
    <div className='Home'>
      <div className='HeadSection'>
        <img src={profileimage} />
        <p>What's on your mind?</p>
        <button>Create Post</button>
      </div>
      
      <div className='BodySection'>

        <Workoutcard/>
        <Workoutcard/>
        <Workoutcard/>
        
      </div>
    </div>
    
  )
}

export default Home