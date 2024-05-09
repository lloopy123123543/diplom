import style from "./PlaceContainerTitle.module.scss"
export const PlaceContainerTitle = (
  {title}: {title: string}
) => {
  return(
    <div className={style.PlaceContainerTitle}>
      <h2>{title}</h2>
    </div>
  )
}