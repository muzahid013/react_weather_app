import { useState } from "react"
import axios from "axios"

function App() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const API_KEY = "enter your openweathermap api";
  
  const fetchWeather = async () => {
    try
    {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    setWeather(response.data);
    console.log(weather);
  }
    catch(error)
  {
    console.error(`Error occured: ${error}`);
    setWeather(null);
  }
  } 

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300">
      <h1 className="text-4xl font-bold mb-4">Weather App</h1>

      <input type="text" name="city" onChange={handleChange} placeholder="Enter a city name" className="p-2 rounded-b-md bg-gray-200 border-gray-800 mb-2" />

      <button className="bg-blue-300 text-white p-2 rounded-md" onClick={fetchWeather}>Get Weather Data</button>

      <div className="bg-white p-6 rounded shadow-md text-center w-72 mt-2">
      {weather && (
        <div>
          <h2 className="font-bold text-3xl">{weather.name}</h2>
          <p>{weather.main.temp}*C</p>
          <p>{weather.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="cloud" />
        </div>
      )}
      
      </div>  
      
      </div>
    </>
  )
}

export default App
