"use client"
import React, { useState } from "react";
import Image from "next/image";

type NewsArticle = {
  id:string,
  title : string,
  summary : string,
  source : string,
  image : string,
  publishedAt : string,
}

type NewsContainerProps = {
  data: Record<string, NewsArticle[]>;
};

const NewsContainer: React.FC<NewsContainerProps> = ({ data }) => {
  // Flatten all articles
  const allArticles: { category: string; article: NewsArticle }[] = Object.entries(data).flatMap(
    ([category, articles]) =>
      articles.map((article) => ({
        category,
        article,
      }))
  );

  // Default to first article
  const [selected, setSelected] = useState<{ category: string; article: NewsArticle }>(allArticles[0]);

  return (
    <div className="md:flex md:h-screen p-6 gap-6 bg-gray-100 ">
      {/* Left: Selected article */}
      <div className="w-full md:w-2/3 bg-white p-6 rounded-xl shadow md:overflow-y-auto">
        <p className=" text-blue-500 uppercase font-bold text-xl mb-2">{selected.category}</p>
        <h1 className="text-3xl font-bold mb-4">{selected.article.title}</h1>
         <p className="text-gray-700">{selected.article.summary}</p>
        <Image src='/india_world_cup.png' height="400" width="400"  className="mb-5 mt-5" alt={selected.article.title}/>
       
         <div className="text-xs text-gray-500 mt-2">
          <span>Source: {selected.article.source}</span> · <span>{selected.article.publishedAt}</span>
        </div>
      </div>

      {/* Right: All other articles */}
      <div className="w-full md:w-1/3 md:overflow-y-auto md:space-y-4 mt-10 md:mt-0">
        {allArticles
          .filter((item) => item.article.id !== selected.article.id)
          .map(({ category, article }) => (
            <div
              key={article.id}
              className="bg-white p-4 rounded-lg shadow hover:bg-gray-50 cursor-pointer mt-3 md:mt-0"
              onClick={() => setSelected({ category, article })}
            >
              <p id={category} className="text-xs text-blue-500 capitalize">{category}</p>
              <h3 className="font-semibold">{article.title}</h3>
              {/* <p className="text-sm text-gray-600">{article.summary}</p> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsContainer;
