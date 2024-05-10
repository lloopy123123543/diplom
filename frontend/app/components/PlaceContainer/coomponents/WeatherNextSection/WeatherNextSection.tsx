import {WeatherNext} from "@/app/components/PlaceContainer/coomponents/WeatherNextSection/WeatherNext/WeatherNext";
import {PlaceContainerTitle} from "@/app/components/PlaceContainer/coomponents/PlaceContainerTitle/PlaceContainerTitle";
import {motion} from "framer-motion";

export const WeatherNextSection = () => {
  return (
    <div>
        <PlaceContainerTitle title={"Погода завтра"}/>
        <WeatherNext/>
    </div>
  )
}