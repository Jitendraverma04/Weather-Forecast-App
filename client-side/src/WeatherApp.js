import React, { useState } from 'react'
import clear from "./Images/clear.jpg"
import  cloud from './Images/cloud.jpg'
import snow from './Images/snow.jpg'
import rain from "./Images/rainy.jpg"
import drizzle from "./Images/drizzle.jpg"
import './WeatherApp.css'


export default function Weatherapp() {
   const[wicon,setwicon]=useState(cloud);

const search=async()=>{
   let Api_key= "e0dec85c318a1368cba629d65d974960" ;
    const element=document.getElementsByClassName("cityinput");

    if(element[0].value ===""){
        
        alert("Please Enter A Correct City Name");
        return 0;
    }
    
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${Api_key}`
    let response=await fetch(url);
    console.log(response)
    let data= await response.json();
    console.log(data);

let temp=document.getElementsByClassName("temperature");
let city=document.getElementsByClassName("city")
let humidity=document.getElementsByClassName("humidity");
let windspeed=document.getElementsByClassName("windspeed");
humidity[0].innerHTML=data.main.humidity+"%";
temp[0].innerHTML=data.main.temp+"ºC";
windspeed[0].innerHTML=data.wind.speed+"km/hr";
city[0].innerHTML=data.name;

if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
{
    setwicon(clear);
}
else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
{
    setwicon(cloud);
}
else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
{
    setwicon(drizzle);
}
else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
{
    setwicon(drizzle);
}
else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
{
    setwicon(rain);
}
else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10d")
{
    setwicon(rain);
}
else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
{
    setwicon(snow);
}
else{
    setwicon(clear);
}
}


  return (
    <div>
        <div className="MainContainer">
      <div className="container">
        <div className="header">
            <input type="text" className='cityinput' placeholder='Enter a city name'/><br/>
            <button type='search' onClick={()=>{search()}}>search</button>
        </div>
        <div className="Imagecontainer">
            <img src={wicon}  alt="" />
        </div>
        <div className="Textcontainer">
            
        <div className="display-flex">
            <div className="city">Jaipur :</div>
            <div className="temperature"> 30º</div>
            </div>

                <div className="Humidity-area">
            <div className="text">Humidity :</div>
            <div className="humidity">64%</div>
            </div>
            <div className="Wind-area">
            <div className="text">Wind-Speed :</div>
            <div className="windspeed">18Km/h</div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
