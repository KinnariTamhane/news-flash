import Image from "next/image";
import Card from "@/components/Card";
import NewsContainer from "@/components/NewsContainer";
import Link from "next/link";
import SearchNews from '@/components/SearchNews';
import Navigation from '@/components/Navigation';
import ClientWrapper from './ClientWrapper'

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
    <main>
      <ClientWrapper result={result}/>
    </main>
  );
}
