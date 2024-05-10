import {PlaceContainerTitle} from "@/app/components/PlaceContainer/coomponents/PlaceContainerTitle/PlaceContainerTitle";
import {
  WeatherCurrent
} from "@/app/components/PlaceContainer/coomponents/WeatherCurrentSection/WeatherCurrent/WeatherCurrent";
export const WeatherCurrentSection = () => {
  return (
    <div>
      <div>
        <PlaceContainerTitle title={"Погода сегодня"}/>
      </div>
      <div>
        <WeatherCurrent/>
      </div>
    </div>
  )
}