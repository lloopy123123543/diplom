import style from "./PageTitle.module.scss"
export const PageTitle = ({title} : {title:string}) => {
  return(
    <h1 className={style.h1}>{title}</h1>
  )
}