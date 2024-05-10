import {
  IWeather
} from "@/app/components/PlaceContainer/coomponents/WeatherCurrentSection/WeatherCurrent/weatherInterfaces";
import Image from "next/image";
import style from "./WeatherCurrent.module.scss"

export const ViewWeatherCurrent = ({weather} : {weather: IWeather | null}) => {
  return(
    <div className={style.weather}>
      <ul className={style.weather__left_block}>
        <li>Температура: {weather?.current.temp_c} C</li>
        <li>Ветер: {weather?.current.wind_kph} М/C</li>
        <li>Ощущается как: {weather?.current.feelslike_c}</li>
      </ul>
      <div>
        {weather?.current.condition && (
          <Image src={"https:"+weather?.current.condition.icon} alt={"weather_current_icon"} width={68} height={68}/>
        )}
      </div>
    </div>
  )
}