import style from "./HomeGrid.module.scss"
import {motion} from "framer-motion";
import {PlaceContainer} from "@/app/components/PlaceContainer/PlaceContainer";
import {NewsSection} from "@/app/components/PlaceContainer/coomponents/NewsSection/NewsSection";

export const HomeGrid = () => {


  return (
    <motion.div
      initial={{ y:20, opacity: 0 }}
      animate={{ y:0, opacity: 1 }}
      transition={{ duration: .5 }}
      className={style.home_grid}>

      <div
        style={{gridArea: "1 / 1 / 3 / 5"}}>
        <PlaceContainer>
          <NewsSection/>
        </PlaceContainer>
      </div>

      <div
        style={{gridArea: "3 / 1 / 5 / 3"}}>
        <PlaceContainer>fsdfsdfsdf</PlaceContainer>
      </div>

      <div
        style={{gridArea: "3 / 3 / 4 / 5"}}>
        <PlaceContainer>sdfsdfsdfsdf</PlaceContainer>
      </div>

      <div
        style={{gridArea: "4 / 3 / 5 / 5"}}>
        <PlaceContainer>sdfsdfsdfsdfsdf</PlaceContainer>
      </div>
    </motion.div>
  )
}