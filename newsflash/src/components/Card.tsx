import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

type NewsArticle = {
  title : string,
  summary : string,
  source : string,
  image : string,
  publishedAt : string,
}

type props = {
  article: NewsArticle; // Accepts an array of CardData
}

const Card: React.FC<props> = ({ article}) => {
  
  return (
       <div className="rounded-xl shadow-md border p-4 w-full max-w-md bg-white">
        <img
          src='news.jpg'
          alt={article.title}
          className="w-auto h-100 rounded-md mb-3 object-cover"
        />
        <h2 className="text-lg font-semibold">{article.title}</h2>
        <p className="text-sm text-gray-600">{article.summary}</p>
        <div className="text-xs text-gray-500 mt-2">
          <span>Source: {article.source}</span> · <span>{article.publishedAt}</span>
        </div>
        <Link href='/{title}' className='cursor-pointer text-sm pt-3 inline-block  hover:text-blue-500'>Read More...</Link>
    </div>
  );
};

export default Card;