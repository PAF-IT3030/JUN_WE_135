import React from 'react'
import './AddPost.css'

function AddPost() {
  return (
    <div className='AddPost'>
      <h1>Create New Post</h1>
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

        <div className='submitBtn'>
          <button type='submit'>Share Post</button>
        </div>

      </form>
    </div>
  )
}

export default AddPost