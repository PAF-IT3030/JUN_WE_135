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
          <label>Routines </label>
          <input type='text' placeholder='Add your daily routines'/>
          <label>Exercise </label>
          <div className='subtBtn'>
          <button type='submit'>ADD EXERCISE</button>    
          </div>  

          <div className='addworkBtn'>
          <button type='submit'>ADD WORKOUT PLAN</button>    
          </div>  


          </div>
        
        
          

      </form>
    </div>
  )
}

export default AddWorkout