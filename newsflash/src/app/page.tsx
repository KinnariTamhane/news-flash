import Image from "next/image";
import Card from "@/components/Card";


 async function fetchData(){
  try{
    const res = await fetch('https://newsapi.org/v2/everything?q=apple&from=2025-04-24&to=2025-04-24&sortBy=popularity&apiKey=5dde9bd8ca594f6aa5798a2282ade06a');
    const data = await res.json();
    return data.articles;
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
       <Card data={result || []} />
    </div>
  );
}
