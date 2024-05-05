import React from 'react'
import './AddWorkout.css'

function CreateMeal() {
  return (
    <div className='CreateMeal'>
        <h1>Add Workout Plan</h1>
        <form className='form-section'>
        <div className='input-section'>
          <label>Name </label>
          <input type='text' placeholder='Meal Name' required/>
          <label>Description </label>
          <input type='text' placeholder='Description' required/>
          <label>Category </label>
          <input type='text' placeholder='category' required/>
        </div>
        <div className='img-upload'></div>
        
          

      </form>
    </div>
  )
}

export default CreateMeal