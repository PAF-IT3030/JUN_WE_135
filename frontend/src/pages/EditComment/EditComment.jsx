import React from 'react'
import './EditComment.css'

function EditComment(){
    return(
        <div className='EditComment'>
            <h1>Edit Comment</h1>

            <form className='form-section'>
                <div className='input-section'>
                    <label>Current Comment : </label>
                    <input type='text' placeholder='Nice' required/>
                </div>

                <div className='input-section'>
                    <label>New Comment : </label>
                    <input type='text' placeholder='Comment' required/>
                </div>

                <div className='submitBtn'>
                    <button type='submit'>Update Comment</button>

                </div>

                
            </form>

        </div>

    )
}

export default EditComment