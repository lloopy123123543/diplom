"use client"
import style from "./PlaceContainer.module.scss"
export const PlaceContainer = ({children}: any) => {


  return(
    <div
      className={style.placeContainer}>
        {children}
    </div>
  )
}