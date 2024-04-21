import React from 'react'
import Workoutcard from '../workoutCard/Workoutcard'
import profileimage from '../../images/profileimage.jpg'
import pic1 from '../../images/pic1.jpeg'
import pic2 from '../../images/pic2.jpeg'
import pic3 from '../../images/pic3.jpeg'
import './ViewComment.css'

function ViewComment() {
  return (
    <div className='ViewComment'>
      {/* <div className='HeadSection'>
        <img src={profileimage} />
        <p>What's on your mind?</p>
      </div> */}
      
      <div className='BodySection'>

        <Workoutcard/>        
        
      </div>

      <div className='firRow'>
          <img src= {pic1}/>

          <div className='u-Details'>
            <p>Navisha Kavindi</p>
            <p>Like</p>
          </div>
        </div>

        <div className='secRow'>
              <p>2d</p>
              <p>Like</p>
              <p>Reply</p>  
        </div>

        <div className='firRow'>
          <img src= {pic2}/>

          <div className='u-Details'>
            <p>Ishara Sandali</p>
            <p>Nice</p>
          </div>
        </div>

        <div className='secRow'>
              <p>1d</p>
              <p>Like</p>
              <p>Reply</p>  
        </div>

        <div className='firRow'>
          <img src= {pic3}/>

          <div className='u-Details'>
            <p>Nimasha Krishmali</p>
            <p>Nice</p>
          </div>
        </div>

        <div className='secRow'>
              <p>5m</p>
              <p>Like</p>
              <p>Reply</p>  
        </div>

    </div>
    
  )
}

export default ViewComment