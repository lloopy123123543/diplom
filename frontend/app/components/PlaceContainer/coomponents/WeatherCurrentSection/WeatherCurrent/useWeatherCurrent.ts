import {useEffect, useState} from "react";
import axios from "axios";
import {
  IWeather
} from "@/app/components/PlaceContainer/coomponents/WeatherCurrentSection/WeatherCurrent/weatherInterfaces";

export const useWeatherCurrent = () => {
  const [weather, setWeather] = useState<IWeather | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try{
        const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=bec16c3e91f84e1b9dc133444240905&q=Perm&aqi=no`)
        setWeather(response.data)
        console.log(response.data)
      } catch (error){
        console.log(error)
      }

    }
    fetchWeather()
  }, []);
  return{
    weather

  }
}