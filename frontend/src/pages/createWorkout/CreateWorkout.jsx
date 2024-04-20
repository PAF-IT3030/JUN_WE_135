import React from 'react'
import './CreateWorkout.css'

function CreateWorkout() {
  return (
    <div className='CreateWorkout'>
      <h1>Create New Workout</h1>
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

        <div className='submitBtn'>
          <button type='submit'>Share Workout</button>
        </div>

      </form>
    </div>
  )
}

export default CreateWorkout