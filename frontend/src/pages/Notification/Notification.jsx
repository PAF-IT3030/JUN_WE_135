import React from 'react'
import pic1 from '../../images/pic1.jpeg'
import pic2 from '../../images/pic2.jpeg'
import pic3 from '../../images/pic3.jpeg'
import pic4 from '../../images/pic4.jpeg'
import './Notification.css'

function Notification() {
    return (
      <div className='Notification'>
        <h1>Notification</h1>

        <div className='firNotification'>
            <p>New</p>
        </div>   

        <div className='firpic'>
            <img src= {pic3}/>
        
            <div className='n-Details'>
                <p>Nimasha Krishmali comment on your post</p>
            </div>
        </div>
        

        <div className='firNotification'>
            <p>Earlier</p>
        </div>

        <div className='firpic'>
                <img src= {pic2}/>

            <div className='n-Details'>
                <p>Ishara Sandali comment on your post</p>
            </div>
        </div>

        <div className='firpic'>
            <img src= {pic1}/>
        
            <div className='n-Details'>
                <p>Navisha Kavindi comment on your post</p>
            </div>
        </div>

        <div className='firpic'>
            <img src= {pic4}/>
        
            <div className='n-Details'>
                <p>Ashen Sanjith reacted to her post</p>
            </div>
        </div>



      </div>
      
    )
  }
  
  export default Notification