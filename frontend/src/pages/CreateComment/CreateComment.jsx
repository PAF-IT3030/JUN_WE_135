import React from 'react'
import Workoutcard from '../workoutCard/Workoutcard'
import profileimage from '../../images/profileimage.jpg'
import './CreateComment.css'

function CreateComment() {
  return (
    <div className='CreateComment'>
      {/* <div className='HeadSection'>
        <img src={profileimage} />
        <p>What's on your mind?</p>
      </div> */}
      
      <div className='BodySection'>

        <Workoutcard/>
        <Workoutcard/>
               
        
      </div>
    </div>
    
  )
}

export default CreateComment