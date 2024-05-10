import style from "./HomeGrid.module.scss"
import {motion} from "framer-motion";
import {PlaceContainer} from "@/app/components/PlaceContainer/PlaceContainer";
import {NewsSection} from "@/app/components/PlaceContainer/coomponents/NewsSection/NewsSection";
import {
  WeatherCurrentSection
} from "@/app/components/PlaceContainer/coomponents/WeatherCurrentSection/WeatherCurrentSection";
import {WeatherNextSection} from "@/app/components/PlaceContainer/coomponents/WeatherNextSection/WeatherNextSection";
import {useEffect, useState} from "react";

export const HomeGrid = () => {


  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };


  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={style.home_grid}>

      <motion.div
        variants={item}
        style={{gridArea: "1 / 1 / 3 / 5"}}>
        <PlaceContainer>
          <NewsSection/>
        </PlaceContainer>
      </motion.div>

      <motion.div
        variants={item}
        style={{gridArea: "3 / 1 / 5 / 3"}}>
        <PlaceContainer>
          sdfsdfdsf
        </PlaceContainer>
      </motion.div>

      <motion.div
        variants={item}
        style={{gridArea: "3 / 3 / 4 / 5"}}>
        <PlaceContainer>
          <WeatherCurrentSection/>
        </PlaceContainer>
      </motion.div>

      <motion.div
        variants={item}
        style={{gridArea: "4 / 3 / 5 / 5"}}>
        <PlaceContainer>
          <WeatherNextSection/>
        </PlaceContainer>
      </motion.div>
    </motion.div>
  )
}