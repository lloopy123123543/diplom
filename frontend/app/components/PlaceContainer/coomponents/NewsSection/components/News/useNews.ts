import axios from "axios";
import {API_NEWS_TOKEN} from "@/app/lib/tokens";
import {useEffect, useState} from "react";
import {INew} from "@/app/components/PlaceContainer/coomponents/NewsSection/components/News/News";
export const useNews = () => {
  const [allNews, setAllNews] = useState<INew | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=a4cb1132346243329a6f0673daa58ee1`);
        setAllNews(response.data);
      } catch (error) {
        console.log(error)
      }
    };

    fetchNews();
  }, []);

  return{
    allNews

  }
}