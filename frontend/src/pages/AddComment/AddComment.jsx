import React from 'react'
import pic1 from '../../images/pic1.jpeg'
import pic2 from '../../images/pic2.jpeg'
import './AddComment.css'

function AddComment() {
    return (
      <div className='AddComment'>
        <h1>Comments</h1>

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

        <div className='Comment'>
          <input type='text' placeholder='Write a comment...'/>
        </div>

        <div className='subButton'>
          <button type='submit'>Add Comment</button>
        </div>

      </div>
      
    )
  }
  
  export default AddComment