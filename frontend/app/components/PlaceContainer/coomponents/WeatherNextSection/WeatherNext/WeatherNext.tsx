import {
  ViewWeatherNext
} from "@/app/components/PlaceContainer/coomponents/WeatherNextSection/WeatherNext/ViewWeatherNext";
import {
  useWeatherNext
} from "@/app/components/PlaceContainer/coomponents/WeatherNextSection/WeatherNext/useWeatherNext";

export const WeatherNext =() => {
  return (
    <ViewWeatherNext {...useWeatherNext()}/>
  )
}