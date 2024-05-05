import React from 'react'
import './AddWorkout.css'

function AddWorkout() {
  return (
    <div className='AddWorkout'>
        <h1>Add Workout Plan</h1>
        <form className='form-section'>
        <div className='input-section'>
          <label>Title </label>
          <input type='text' placeholder='Title' required/>
          <label>Name </label>
          <input type='text' placeholder='Name' required/>
          <label>Created Date </label>
          <input type='date' placeholder='Date' required/>
          <label>Age </label>
          <input type='text' placeholder='age' required/>
        </div>
        
        
          

      </form>
    </div>
  )
}

export default AddWorkout