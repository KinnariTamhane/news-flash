import Image from "next/image";
import Card from "@/components/Card";
import NewsContainer from "@/components/NewsContainer";


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
       <NewsContainer data={result}/>
    </div>
  );
}
