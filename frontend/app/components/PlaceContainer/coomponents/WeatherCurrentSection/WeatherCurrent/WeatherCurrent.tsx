import {
  ViewWeatherCurrent
} from "@/app/components/PlaceContainer/coomponents/WeatherCurrentSection/WeatherCurrent/ViewWeatherCurrent";
import {
  useWeatherCurrent
} from "@/app/components/PlaceContainer/coomponents/WeatherCurrentSection/WeatherCurrent/useWeatherCurrent";

export const WeatherCurrent = () => {
  return(
    <ViewWeatherCurrent {...useWeatherCurrent()}/>
  )
}