import style from "./NavbarMobile.module.scss"
import ITEMS_CONST from "@/app/components/Header/components/Navbar/HeaderItem/items_const";
import {Iitem_const} from "@/app/components/Header/components/Navbar/Navbar";
import {HeaderItemMobile} from "@/app/components/Header/components/NavbarMobile/HeaderItemMobile/HeaderItemMobile";

export const NavbarMobile = () => {
  return (
    <nav className={style.nav}>
      <ul>
        {ITEMS_CONST.map((item: Iitem_const) => {
          return (
            <HeaderItemMobile title={item.title} icon={item.icon} id={item.id} href={item.href} />
          )
        })}
      </ul>
    </nav>
  )
}