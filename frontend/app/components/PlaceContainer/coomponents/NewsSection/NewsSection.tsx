import style from "./NewsSection.module.scss"
import {PlaceContainerTitle} from "@/app/components/PlaceContainer/coomponents/PlaceContainerTitle/PlaceContainerTitle";
import {News} from "@/app/components/PlaceContainer/coomponents/NewsSection/components/News/News";
export const NewsSection = () => {
  return(
    <div className={style.NewsSection}>
      <PlaceContainerTitle title={"Новости дня"}/>
      <News/>
    </div>
  )
}