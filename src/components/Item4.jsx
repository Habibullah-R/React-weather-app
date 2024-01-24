import React from 'react'
import './Item4Style.css'


const Item4 = (props) => {
  return (
    <div className='hourly'>
      <p>{props.time}</p>
      <img src={props.hourlyImage} alt="" />
      <p>{props.hourlyDescription}</p>
    </div>
  )
}

export default Item4
