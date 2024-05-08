"use client"
import {Iitem_const} from "@/app/components/Header/components/Navbar/Navbar";
import Image from "next/image";
import { useState} from "react";
import style from "./HeaderItem.module.scss"
import {useRouter} from "next/navigation";
import {AnimatePresence, motion} from "framer-motion";

interface IProps extends Iitem_const {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const HeaderItem = (props: IProps) => {
  const [isHover, setIsHover] = useState(false)
  const router = useRouter()
  const {
    id,
    title,
    icon,
    href,
    currentPage,
    setCurrentPage
  } = props;

  const redirectUrl = (url:string) => {
    setCurrentPage(id)
    router.push(url)
  }

  return (
    <div >
      <AnimatePresence>
        {
          isHover &&
          <motion.div
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 70}}
            exit={{opacity: 0, x: 50}}
            className={style.popup}>
            {title}
          </motion.div>
        }
        <motion.li
          onClick={() => {
            redirectUrl(href)
          }}
          whileTap={{scale: 0.5}}
          style={{background: currentPage === id ? "#F1AD3D" : "", filter: currentPage === id ? "none" : ""}}
          className={style.li}
          onMouseEnter={() => {
            setIsHover(true)
          }}
          onMouseLeave={() => {
            setIsHover(false)
          }}
          key={"header_item_" + id}>
          <Image src={icon} alt={title} width={30} height={30}/>
        </motion.li>
      </AnimatePresence>
    </div>
  )
}