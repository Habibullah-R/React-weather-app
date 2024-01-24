import React from 'react'
import './NextDaysStyle.css'

const NextDays = (props) => {
  return (
    <div className='next-days'>
      <p>{props.nextDay}</p>
      <img src={props.nextDayImg} width={'70px'} height={'70px'} alt="" />
      <p>{props.nextDayText}</p>
      <p>{props.nextDayTemp}</p>
    </div>
  )
}

export default NextDays
