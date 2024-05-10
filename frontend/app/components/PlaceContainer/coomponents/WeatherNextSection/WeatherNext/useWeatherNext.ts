import {useEffect, useState} from "react";
import axios from "axios";
import {
  IWeather
} from "@/app/components/PlaceContainer/coomponents/WeatherCurrentSection/WeatherCurrent/weatherInterfaces";
import {
  IWeatherNext
} from "@/app/components/PlaceContainer/coomponents/WeatherNextSection/WeatherNext/WeatherInterfaceNext";

export const useWeatherNext = () => {
  const [weather, setWeather] = useState<IWeatherNext | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try{
        const response = await axios.get(`http://api.weatherapi.com/v1/future.json?key=bec16c3e91f84e1b9dc133444240905&q=Perm&dt=2024-06-09`)
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