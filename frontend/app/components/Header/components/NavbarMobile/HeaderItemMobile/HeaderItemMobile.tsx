import Image from "next/image";

export const HeaderItemMobile = ({title, icon, id, href} : any) => {
  return(
    <li>
      <a href={href}>
        <Image src={icon} alt={title} width={30} height={30}/>
      </a>
    </li>
  )
}