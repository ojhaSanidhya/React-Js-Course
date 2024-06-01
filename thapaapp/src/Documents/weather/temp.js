import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./weatherCard";

const Temp = () => {
  const [searchValue, setSearchValue] = useState("Varanasi");
  const [tempInfo, setTempInfo] = useState({});   
  const getSearchInfo = async() => {
    try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ebcfb692a8fb1b9833542d8762094c01`;
        let res = await fetch(url); // await -- first it run all parts of this fn then go to second one.
        let data = await res.json(); //use for converting the value in an object

        //Api mei se data get karne ka tarika
        const { temp, pressure, humidity } = data.main;
        const { main: weathermood } = data.weather[0]; //main ka name change kar hum weathermood rakh diye hai
        const{ name } = data;
        const{ speed } = data.wind;
        const{ country, sunset } = data.sys;
        
        //Sare data ko club kar diye
        const myNewWeatherInfo = {
            temp,
            pressure,
            humidity,
            weathermood,
            name,
            speed,
            country,
            sunset
        };

        //Naye useState mei usko pass kar denge
        setTempInfo(myNewWeatherInfo);

    } catch(error) {
        console.log("error");
    }
  }
  useEffect( () => {
    getSearchInfo();
  }, []);
  return (
    <>
      <div className="warp">
        <div className="search">
          <input
            type="text"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={getSearchInfo}
          >
            Search
          </button>
        </div>
      </div>

      <WeatherCard tempInfo = {tempInfo}/>
    </>
  );
};

export default Temp;
