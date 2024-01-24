import React from 'react'
import './Item5Style.css'

const Item5 = (props) => {
  return (
    <div className='last'>
      <div className="first">
      <h2>{props.first}</h2>
      <p>{props.desc1}</p>
      </div>
      <div className="second">
      <h2>{props.second}</h2>
      <p>{props.desc2}</p>
      </div>
    </div>
  )
}

export default Item5
