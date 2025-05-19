"use client";

import NewsContainer from '@/components/NewsContainer';
import Card from '@/components/Card';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import SearchNews from '@/components/SearchNews';
import React, { useState } from 'react'

type Article = {
  id: string;
  title: string;
  summary: string;
  url: string;
  publishedAt: string;
};

type ClientWrapperProps = {
  result: Article[];
}

export default function ClientWrapper({result}:ClientWrapperProps) {
    const [query, setQuery] = useState('')
  return (
    <>
        <div className='block md:grid md:grid-cols-3 mx-4 md:mx-0 mb-'>
            <Link href="/" className='px-5 py-3 mt-12 md:mt-0 w-full'>
                <p className='text-center md:text-left text-4xl md:text-6xl pt-2'>🌍 <span className='text-3xl lg:text-4xl align-middle'>NewsFlash</span></p>
            </Link>
            <SearchNews onSearchChange={setQuery}/>
        </div>
        <Navigation/>
        {
            query.trim() === '' 
            ?
            <NewsContainer data={result}/> 
            :
            ''
            // <Card article={result}/>
        }
    </>
  )
}