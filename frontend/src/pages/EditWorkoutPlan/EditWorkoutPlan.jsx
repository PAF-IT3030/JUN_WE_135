import React from 'react'
import "./EditWorkoutPlan.css"

function EditWorkoutPlan() {
  return (
    <div classname = 'EditWorkoutPlan'>
            <div className='AddWorkout'>
        <h1>Update Workout Plan</h1>
        <form className='form-section'>
        <div className='input-section'>
          <label>Title </label>
          <input type='text' placeholder='Workout Plan 1' required/>
          <label>Name </label>
          <input type='text' placeholder='Ring' required/>
          <label>Created Date </label>
          <input type='date' placeholder='date' required/>
          <label>Age </label>
          <input type='text' placeholder='24' required/>
          <label>Routines </label>
          <input type='text' placeholder='Add your daily routines'/>
           

          <div className='addworkBtn'>
          <button type='submit'>UPDATE WORKOUT PLAN</button>    
          </div>  


          </div>
        
        
          

      </form>
    </div>
  )
    </div>
  )
}

export default EditWorkoutPlan