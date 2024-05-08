import ITEMS_CONST from "@/app/components/Header/components/Navbar/HeaderItem/items_const";
import {HeaderItem} from "@/app/components/Header/components/Navbar/HeaderItem/HeaderItem";
import style from "./Navbar.module.scss"
import {useState} from "react";
export interface Iitem_const{
  id: number;
  title: string;
  icon: string;
  href: string;
}

export const Navbar = () => {
  const [currentPage, setCurrentPage] = useState(0)
  return(
    <nav className={style.nav}>
      <ul>
        {ITEMS_CONST.map((item: Iitem_const) => {
          return(
            <HeaderItem title={item.title} icon={item.icon} id={item.id} href={item.href} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
          )
        })}
      </ul>
    </nav>
  )
}