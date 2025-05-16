import Image from "next/image";
import Card from "@/components/Card";


export type NewsArticle = {
  title: string;
  summary: string;
  source: string;
  publishedAt: string;
  image: string;
};

 async function fetchData(){
  try{
    const res = await fetch('http://localhost:3000/api');
    const data = await res.json();
    return data[0];
  }
  catch(e){
    console.log(e)
    return [];
  }
 }

export default async function Home() {
  const result = await fetchData();

  return (
    <div>
       {
        Object.entries(result).map(([category, articles])=>(
          <div id={category} className="" key={category}>
            <h1 className="px-5 py-10 uppercase font-bold mb-5 text-3xl text-center"> {category} </h1>
            <div className="grid xl:grid-cols-3 gap-5 px-5 mb-10">
            {(articles as NewsArticle[]).map((article,index)=>(
                <Card key={index} article={article}/>
              ))
            }
            </div>
          </div>
        ))}
    </div>
  );
}
