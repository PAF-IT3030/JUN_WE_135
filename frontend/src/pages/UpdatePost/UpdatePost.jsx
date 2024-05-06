import React from 'react'
import './Updatepost.css'
import workoutimage from '../../images/workoutimage.jpeg'

function Updatepost() {
  return (
    <div className='Updatepost'>
        <h1>Edit Post</h1>
      <form className='form-section'>
        <div className='input-section'>
          <label>Post </label>
          <input type='text' placeholder='Post Name' required/>
        </div>
        <div className='img-upload'>
        
          <div className='file-section'>
          
          <input type='file' required/>
          </div>
          <div className='uploadBtn'>
            <button type='button'>UPLOAD </button>
          </div>
        </div>

        <div className='AddDelete'>
            <img src={workoutimage}/>
            <button type='button'>Delete</button>
        </div>

        <div className='submitBtn'>
          <button type='submit'>Update Post</button>

        </div>

      </form>
      </div>
  )
}

export default Updateworkout