import React from 'react'
import './Workoutcard.css'
import workoutimage from '../../images/workoutimage.jpeg'
import profileimage from '../../images/profileimage.jpg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';

function Workoutcard() {
  return (
    <div className='Workoutcard'> 
    
    <div className='firstRow'>
        <img src={profileimage}/>
        <div className='userDetails'>
            <p>Nethmi Rathnayaka</p>
            <p>5 m</p>
            </div>
        <MoreHorizIcon style={{marginLeft: 80}}/>
    </div>
    
    <div className='title'><p>Fitness is a mindset</p></div>
    <div className='secondRow'>
    <img src= {workoutimage}/>
    </div>
    <div className='thirdRow'>
      <FavoriteBorderIcon/>
      <CommentIcon/>
    </div>
    </div>
    
  )
}

export default Workoutcard