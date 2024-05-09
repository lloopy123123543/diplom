"use client"
import {ViewNews} from "@/app/components/PlaceContainer/coomponents/NewsSection/components/News/ViewNews";
import {useNews} from "@/app/components/PlaceContainer/coomponents/NewsSection/components/News/useNews";


interface IArticle {
  source: {
    id: any,
    name: string
  },
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: string,
  content: string
}

export interface INew  {
  status: string,
  totalResults: number,
  articles: IArticle[]
}



export const News = () => {
  return(
    <ViewNews {...useNews()}/>
  )
}