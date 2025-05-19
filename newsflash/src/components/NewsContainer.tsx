import React, { useState } from 'react';
import Image from 'next/image';

type NewsArticle = {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedAt: string;
  image: string;
};

type NewsData = {
  [category: string]: NewsArticle[];
};

type Props = {
  data: NewsData;
};

const NewsContainer: React.FC<Props> = ({ data }) => {
  const [selectedArticles, setSelectedArticles] = useState<Record<string, NewsArticle>>(() => {
    const initial: Record<string, NewsArticle> = {};
    for (const category in data) {
      initial[category] = data[category][0];
    }
    return initial;
  });

  const handleArticleClick = (category: string, article: NewsArticle) => {
    setSelectedArticles((prev) => ({
      ...prev,
      [category]: article,
    }));
  };

  return (
    <div className="flex flex-col gap-10 p-5">
      {Object.entries(data).map(([category, articles]) => {
        const mainArticle = selectedArticles[category];
        const otherArticles = articles.filter((a) => a.id !== mainArticle.id);

        return (
          <div key={category} className="flex flex-col gap-5">
            <h2 id={category} className="text-3xl font-bold uppercase text-center">{category}</h2>
            <div className="md:flex md:gap-5">

              <div className="md:w-2/3 bg-gray-100 shadow rounded p-4">
                <Image
                  src='/news.jpg'
                  alt={mainArticle.title}
                  width={200}
                  height={200}
                  className="rounded mb-3 mx-auto my-0 md:mx-0 md:my-0 pb-3"
                />
                <h3 className="text-2xl font-semibold">{mainArticle.title}</h3>
                <p className="text-sm text-gray-500">{mainArticle.publishedAt} | {mainArticle.source}</p>
                <p className="mt-3 text-gray-700">{mainArticle.summary}</p>
              </div>


              <div className="md:w-1/3 bg-white rounded  space-y-3 overflow-y-auto h-[400px] overflow-auto">
                {otherArticles.map((article) => (
                  <div
                    key={article.id}
                    className="cursor-pointer hover:bg-gray-100 p-2 rounded-xl border mb-5 mt-10 md:mt-0"
                    onClick={() => handleArticleClick(category, article)}
                  >
                    <p className="font-medium">{article.title}</p>
                    <p className="text-sm text-gray-500">{article.publishedAt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsContainer;
