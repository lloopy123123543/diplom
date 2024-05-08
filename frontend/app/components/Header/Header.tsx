"use client"
import style from "./Header.module.scss"
import {AnimatePresence, motion} from "framer-motion"
import {Navbar} from "@/app/components/Header/components/Navbar/Navbar";
import {useState} from "react";
export const Header = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <>
      <AnimatePresence>
      {isOpen && (

          <motion.header
            initial={{width: 0}}
            animate={{width: 60}}
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
    </>
  )
}