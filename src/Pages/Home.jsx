import React from 'react'
import { useState , useEffect } from 'react'
import '../App.css'
import { AiOutlineSearch } from 'react-icons/ai'
import Item3  from '../components/Item3'
import Item4  from '../components/Item4'
import Item5  from '../components/Item5'
import Loader from '../components/Loader'


const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log(import.meta.env.VITE_BASE_URL)

const options = {
  method: 'GET',
  url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
  params: {
    days:'4'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_BASE_KEY,
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

const Home = () => {

  const [data , setData] = useState([])
  const [searchTerm , setSearchTerm] = useState("")
  const [load , setLoad] = useState(false)
  const [error,setError] = useState('')
 

  useEffect(() => {
    async function getData(){
      setLoad(true)
      await fetch(`${BASE_URL}?days=3&q=multan`,options)
      .then(res => res.json())
      .then((data)=> {
        setLoad(false)
        setData(data);
      })
    }
    getData()
  }, [])
  
  const handleEvent =async (e)=>{
    e.preventDefault();
    let err;
    if(searchTerm === "" || searchTerm === null ){
      err = 'error'
    }
    if(err === 'error'){
      alert('Please enter a city name!')
    }
    else{
    setData([])
    setLoad(true)
     const res = await fetch(`${BASE_URL}?days=3&q=${searchTerm}`,options)
    const data = await res.json()
    console.log(data)
    if(data?.error){
      setError('City not found! Try again later.')
    }
    else{
      setLoad(false)
      setSearchTerm("")
      setError('')
        setData(data);
      }
    }
}

  



  return (
    <div className='container container-1'>

<div className={load === false ? 'load' : 'noLoad'}>
        <Loader />
        </div>


        <div className='main'>

          {/* search bar */}

        <form className="search-bar" action="" onSubmit={handleEvent}>
        <input type="text" 
        placeholder='Search here' 
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        />
        <button><AiOutlineSearch/></button>
        </form>
        <div className="error"
        style={{
          display:error === "" ? 'none' : 'block'}}
        >{error}</div>

        
{/* Current  */}

<div className="sub-main"
>

  <div className="main-top">


  <div className="today-forecast" style={{visibility:load === false ? 'visible' : 'hidden'}}  >
        <h4>Hourly Forecast</h4>

        <div className="first-data">
        <div className="left-2">
          <h2>{data?.location?.name}</h2>
          <p>{data?.location?.country}</p>
          <h2>{data?.current?.temp_c}&deg;C</h2>
          <p>temperature</p>
        </div>
        <div className="extra"></div>
        <div className="image">
          <img src={data?.current?.condition?.icon} alt="" />
        </div>
        </div>

        <div className="more-data">
        <div className="humidity">
        <h3>{data?.current?.humidity}%</h3>
          <p>humidity</p>
        </div>
        <div className="sunrise">
          <h3>{data?.forecast?.forecastday[0]?.astro?.sunrise}</h3>
          <p>Sunrise</p>
        </div>
        <div className="sunset">
          <h3>{data?.forecast?.forecastday[0]?.astro?.sunset}</h3>
          <p>Sunset</p>
        </div>
        </div>

      </div>



      <div class="hourly-forecast">

<div className="item-4 item row-3" 
style={{visibility:load === false ? 'visible' : 'hidden'}}
>
  <Item4 
  time = {data?.forecast?.forecastday[0]?.hour[5]?.time.slice(11)+' AM'}
  hourlyImage = {data?.forecast?.forecastday[0]?.hour[5]?.condition?.icon}
  hourlyDescription = {data?.forecast?.forecastday[0]?.hour[5]?.condition?.text}
  />
  </div>

<div className="item-5 item row-3"
style={{visibility:load === false ? 'visible' : 'hidden'}}
>
  <Item4
time = {data?.forecast?.forecastday[0]?.hour[8]?.time.slice(11)+' AM'}
hourlyImage = {data?.forecast?.forecastday[0]?.hour[8]?.condition?.icon}
hourlyDescription = {data?.forecast?.forecastday[0]?.hour[8]?.condition?.text}
/>
</div>

<div className="item-6 item row-3"
style={{visibility:load === false ? 'visible' : 'hidden'}}
>
  <Item4
time = {data?.forecast?.forecastday[0]?.hour[12]?.time.slice(11)+' AM'}
hourlyImage = {data?.forecast?.forecastday[0]?.hour[12]?.condition?.icon}
hourlyDescription = {data?.forecast?.forecastday[0]?.hour[12]?.condition?.text}
/>
</div>

<div className="item-7 item row-3"
style={{visibility:load === false ? 'visible' : 'hidden'}}
>
  <Item4
time = {'03:00 PM'}
hourlyImage = {data?.forecast?.forecastday[0]?.hour[15]?.condition?.icon}
hourlyDescription = {data?.forecast?.forecastday[0]?.hour[15]?.condition?.text}
/>
</div>

<div className="item-8 item row-3"
style={{visibility:load === false ? 'visible' : 'hidden'}}
>
  <Item4
time = {'06:00 PM'}
hourlyImage = {data?.forecast?.forecastday[0]?.hour[18]?.condition?.icon}
hourlyDescription = {data?.forecast?.forecastday[0]?.hour[18]?.condition?.text}
/>
</div>

<div className="item-9 item row-3"
style={{visibility:load === false ? 'visible' : 'hidden'}}
>
  <Item4
time = {'09:00 PM'}
hourlyImage = {data?.forecast?.forecastday[0]?.hour[21]?.condition?.icon}
hourlyDescription = {data?.forecast?.forecastday[0]?.hour[21]?.condition?.text}
/>
</div>

</div>






  </div>

  <div className="main-bottom">

  <div className="next-2-days" 
      style={{visibility:load === false ? 'visible' : 'hidden'}}
      >
        <Item3 
        speed={data?.current?.wind_kph}
        gust={data?.current?.gust_kph}
        degree={data?.current?.wind_degree}
        nextDayImg1 = {data?.forecast?.forecastday[1]?.day?.condition?.icon}
        nextDayText1 = {data?.forecast?.forecastday[1]?.day?.condition?.text}
        nextDayTemp1 = {data?.forecast?.forecastday[1]?.day?.avgtemp_c + "\u00b0C"}
        nextDayImg2 = {data?.forecast?.forecastday[2]?.day?.condition?.icon}
        nextDayText2 = {data?.forecast?.forecastday[2]?.day?.condition?.text}
        nextDayTemp2 = {data?.forecast?.forecastday[2]?.day?.avgtemp_c + "\u00b0C"}
        />
      </div>

      <div class="other-data">
      <div className="row-4"
      style={{visibility:load === false ? 'visible' : 'hidden'}}
      >
        <Item5
        first={data?.current?.feelslike_c + "\u00b0C"}
        desc1={"Real Feel"}
        second={data?.current?.pressure_in}
        desc2={"Pressure"}
        />
        </div>
      <div className="row-4"
      style={{visibility:load === false ? 'visible' : 'hidden'}}
      >
        <Item5
        first={data?.forecast?.forecastday[0]?.day?.mintemp_c + "\u00b0C"}
        desc1={"Temperature Min"}
        second={data?.forecast?.forecastday[0]?.day?.maxtemp_c + "\u00b0C"}
        desc2={"Temperature Max"}
        />
        </div>
      <div className="row-4"
      style={{visibility:load === false ? 'visible' : 'hidden'}}
      >
        <Item5
        first={data?.location?.lat}
        desc1={"Latitude"}
        second={data?.location?.lon}
        desc2={"Longitude"}
        />
        </div>
    </div>

  </div>
</div>

      


{/* Next Forecast */}

      

      {/* Hourly forecast */}


      {/* Extra information */}


    </div>
    </div>
  )
}

export default Home
