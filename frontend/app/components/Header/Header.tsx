"use client"
import style from "./Header.module.scss"
import {AnimatePresence, motion} from "framer-motion"
import {Navbar} from "@/app/components/Header/components/Navbar/Navbar";
import {useState} from "react";
import {NavbarMobile} from "@/app/components/Header/components/NavbarMobile/NavbarMobile";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <div className={style.desktop}>
        <AnimatePresence>
          {isOpen && (

            <motion.header
              initial={{width: 0}}
              animate={{width: 65}}
              exit={{width: 0}}
              transition={{ease: "easeOut", duration: .25}}
              className={style.header}>
              <Navbar/>
            </motion.header>

          )}
        </AnimatePresence>

        <div onClick={() => {
          setIsOpen((prev) => !prev)
        }} className={style.header_circle}>
        </div>
      </div>
      <div className={style.mobile}>
          <header
            className={style.header}>
            <NavbarMobile/>
          </header>
      </div>
    </>
  )
}