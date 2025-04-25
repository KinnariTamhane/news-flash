import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

type CardData = {
  id : number,
  author : string,
  title : string,
  description : string,
  url : string,
  urlToImage : string,
  publishedAt : string,
  content : string,
}

interface CardProps {
  data: CardData[]; // Accepts an array of CardData
}

const Card: React.FC<CardProps> = ({ data }) => {
  return (
     <div className="container mx-auto card-container grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {data.map((item,index) => {
        const date = new Date(item.publishedAt);
        const formatted = `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;

        return(
          <div key={index} className="card border p-4">
          <Image className='mx-auto my-0 text-center' src={item.urlToImage} alt={item.title} width={250} height={250} />
          <h2 className='text-lg mt-5 mb-3 font-bold'>{item.title}</h2>
           <p className='mt-4 line-clamp-3'>{item.description}</p>
           <p className='mt-4 text-md'>Published At : {formatted}</p>
           <button className='border px-3 py-2 hover:bg-white hover:text-black mt-5'>
            <Link href={item.url} target="_blank" rel="noopener noreferrer">Read more...</Link>
          </button>
        </div>
        )
    })}
    </div>
  );
};

export default Card;