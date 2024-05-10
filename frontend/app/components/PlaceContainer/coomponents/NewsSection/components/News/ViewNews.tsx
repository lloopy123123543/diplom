import {INew} from "@/app/components/PlaceContainer/coomponents/NewsSection/components/News/News";
import style from "./ViewNews.module.scss"
import {motion} from "framer-motion";

export const ViewNews = ({allNews}: {allNews: INew | null}) => {
  function convertDateToRussianFormat(dateString:string): string {
    const date = new Date(dateString);

    const options: any = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', weekday: 'long' };
    const russianDate = date.toLocaleString('ru-RU', options);

    return russianDate;
  }

  return(
    <div className={style.news}>
      {allNews && allNews.articles?.map((article, index) => (
        <motion.div
          key={article.title}
          initial={{ y:20, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{duration:index / 10 + 0.2}}
          className={style.new}
        >
          <a href={article.url} >{article.title}</a>
          <p>{article.description}</p>
          <div className={style.subInfo}>
            <div>{article.author}</div>
            <div>{convertDateToRussianFormat(article.publishedAt)}</div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}