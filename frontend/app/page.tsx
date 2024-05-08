"use client"

import {HomeGrid} from "@/app/components/HomeGrid/HomeGrid";
import {PageTitle} from "@/app/components/PageTitle/PageTitle";

export default function Home() {
  return (
      <div style={{
        width:"100%",
        height:"100%"
      }}>
        <PageTitle title={"Главная"}/>
        <HomeGrid/>
      </div>
  );
}
