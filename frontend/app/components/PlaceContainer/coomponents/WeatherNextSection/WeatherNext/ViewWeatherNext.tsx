import {
  IWeather
} from "@/app/components/PlaceContainer/coomponents/WeatherCurrentSection/WeatherCurrent/weatherInterfaces";
import Image from "next/image";
import style from "./WeatherNext.module.scss"
import {
  IWeatherNext
} from "@/app/components/PlaceContainer/coomponents/WeatherNextSection/WeatherNext/WeatherInterfaceNext";

export const ViewWeatherNext = ({weather} : {weather: IWeatherNext | null}) => {
  return(
    <div className={style.weather}>
      <ul className={style.weather__left_block}>
        <li>Температура: {weather?.forecast.forecastday[0].day.avgtemp_c} C</li>
        <li>Ветер: {weather?.forecast.forecastday[0].day.avgtemp_c} М/C</li>
        <li>Ощущается как: {weather?.forecast.forecastday[0].day.avgtemp_c}</li>
      </ul>
      <div>
        {weather?.forecast.forecastday[0].day.condition && (
          <Image src={"https:"+weather?.forecast.forecastday[0].day.condition.icon} alt={"weather_current_icon"} width={68} height={68}/>
        )}
      </div>
    </div>
  )
}