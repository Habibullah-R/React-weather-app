import React from 'react'
import './Item3Style.css'
import NextDays from './NextDays'
import { useEffect , useState } from 'react'


const Item3 = (props) => {

  const [ next , setNext ] = useState("")
  const [ next1 , setNext1 ] = useState("")

  useEffect(() => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date()
    let next = date.getDay()
    next+=1
    if(next>6){
      next -= 7
      console.log(days[next])
      setNext(days[next])
    }
    else{
      setNext(days[next])
    }

    
    let next1 = next + 1
    if(next1>6){
      next1 -= 7
      console.log(days[next1])
      setNext1(days[next1])
    }
    else{
      setNext1(days[next1])
    }
    
  }, [])
  


  return (
    <div>
      <div className="data-3">
        <h3>NEXT 2 DAYS FORECAST</h3>
        <NextDays 
        nextDay = {next}
        nextDayImg = {props.nextDayImg1}
        nextDayText = {props.nextDayText1}
        nextDayTemp = {props.nextDayTemp1}
        />
        <NextDays
        nextDay = {next1}
        nextDayImg = {props.nextDayImg2}
        nextDayText = {props.nextDayText2}
        nextDayTemp = {props.nextDayTemp2}
        />
        <div className="air-condition">
          <h3>Air condition</h3>
          <div className="air-data">
            <div className="gust">
              <h1>{props.speed}</h1>
              <p>Speed</p>
            </div>
            <div className="degree">
            <h1>{props.gust}</h1>
              <p>Gust</p>
            </div>
            <div className="speed">
            <h1>{props.degree}</h1>
              <p>Degree</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item3

