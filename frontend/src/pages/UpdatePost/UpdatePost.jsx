import React from 'react'
import './Updateworkout.css'
import workoutimage from '../../images/workoutimage.jpeg'

function Updateworkout() {
  return (
    <div className='Updateworkout'>
        <h1>Edit Workout</h1>
      <form className='form-section'>
        <div className='input-section'>
          <label>Workout </label>
          <input type='text' placeholder='Workout Name' required/>
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
          <button type='submit'>Update Workout</button>

        </div>

      </form>
      </div>
  )
}

export default Updateworkout