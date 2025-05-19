"use client";

import NewsContainer from '@/components/NewsContainer';
import Navigation from '@/components/Navigation';
import Link from 'next/link';
import SearchNews from '@/components/SearchNews';
import React, { useEffect, useState } from 'react';

type Article = {
  id: string;
  title: string;
  summary: string;
  url: string;
  publishedAt: string;
  source?: string;
  image?: string;
};

type NewsData = {
  [category: string]: Article[];
};

type ClientWrapperProps = {
  result: NewsData;
};

const ClientWrapper: React.FC<ClientWrapperProps> = ({ result }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState<NewsData>(result);

  useEffect(() => {
    if (!query.trim()) {
      setFilteredData(result);
      return;
    }

    const newFilteredData: NewsData = {};

    Object.entries(result).forEach(([category, articles]) => {
      const filteredArticles = articles.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.summary.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredArticles.length > 0) {
        newFilteredData[category] = filteredArticles;
      }
    });

    setFilteredData(newFilteredData);
  }, [query, result]);

  return (
    <>
      <div className="block md:grid md:grid-cols-3 mx-4 md:mx-0 mb-">
        <Link href="/" className="px-5 py-3 mt-12 md:mt-0 w-full">
          <p className="text-center md:text-left text-4xl md:text-6xl pt-2">
            🌍 <span className="text-3xl lg:text-4xl align-middle">NewsFlash</span>
          </p>
        </Link>
        <SearchNews onSearchChange={setQuery} />
      </div>
      <Navigation />
      <NewsContainer data={query.trim() === '' ? result : filteredData} />
    </>
  );
};

export default ClientWrapper;
