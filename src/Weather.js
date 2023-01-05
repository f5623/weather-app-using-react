import React from "react"
import { useState } from "react"
import axios from "axios"
import Current from "./current"
import parse from 'html-react-parser';

let days = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
];
export default function Weather(){
    let [city , setCity] = useState("oslo")
    let [inf, setInf] = useState(null);
    let [imgSrc,setImgSrc] = useState(null)
    let [forecastElment, setforecastElment] = useState(null)

    function handleCityInput(event){
        event.preventDefault()
        setCity(event.target.value)
    }
 function handleResponse(response){
    let currentTemp = Math.round(response.data.temperature.current);
    // console.log(response)
    let windSpeed = response.data.wind.speed;
    let humidity = response.data.temperature.humidity;
    let weatherDesc = response.data.condition.description
    setImgSrc(`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`) ;
    setInf({city, currentTemp, imgSrc , windSpeed, humidity,weatherDesc });
 }
 function handleForecastResponse(response){

    forecastElment = `<div className="row">`
    let i=1
    while (i<7) {
    let forcasteDate = new Date(response.data.daily[i].time*1000)
    forecastElment = forecastElment + `<div className="col ">
    <div className="card-header">${days[forcasteDate.getDay()]}</div>
    <div className="card-body"><img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.daily[i].condition.icon}.png" alt=""></div>
    <div className="card-footer">${Math.round(response.data.daily[i].temperature.minimum)}°C  \xa0  ${Math.round(response.data.daily[i].temperature.maximum)}°C </div>
    </div>`
    i++}
    forecastElment = forecastElment + `</div>`;
   
    setforecastElment(parse(forecastElment))
    return parse(forecastElment)
  
 }

    function handleSubmit(event){
        event.preventDefault()
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=7386080a2f6318d17ebb9t1f5453o70f`;
        axios.get(apiUrl).then(handleResponse);
        let forecastApiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=7386080a2f6318d17ebb9t1f5453o70f`
        axios.get(forecastApiUrl).then(handleForecastResponse);
      }

    return(
    <div className="search-box">
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2 city-input"
            type="search"
            placeholder="Search for a city"
            aria-label="Search"
            onChange={handleCityInput}
          />
          <button
            className="btn btn-outline-danger btn-light search-button"
            type="submit"
          >
            Search
          </button>
        </form>
        <Current input={inf} />
        <div className="mt-3 text-center" > 
        {forecastElment}
        </div>
      </div>
)
}