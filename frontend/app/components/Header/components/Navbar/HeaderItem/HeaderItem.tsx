"use client"
import {Iitem_const} from "@/app/components/Header/components/Navbar/Navbar";
import Image from "next/image";
import { useState} from "react";
import style from "./HeaderItem.module.scss"
import {useRouter} from "next/navigation";

export const HeaderItem = (props: Iitem_const) => {
  const [isHover, setIsHover] = useState(false)
  const router = useRouter()
  const {
    id,
    title,
    icon,
    href
  } = props;

  const redirectUrl = (url:string) => {
    router.push(url)
  }

  return (
    <div >
      {
        isHover &&
        <div className={style.popup}>
          {title}
        </div>
      }
      <li
        onClick={() => {redirectUrl(href)}}

        className={style.li}
        onMouseEnter={() => {
          setIsHover(true)
        }}
        onMouseLeave={() => {
          setIsHover(false)
        }}
        key={"header_item_" + id}>
        <Image src={icon} alt={title} width={30} height={30}/>
      </li>
    </div>
  )
}