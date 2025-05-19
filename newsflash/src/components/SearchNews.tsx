"use client";
import {useState} from 'react'
import React from 'react'

type SearchProps = {
  onSearchChange: (value: string) => void;
};

function SearchNews({onSearchChange}:SearchProps) {

const [searchInput,setSearchInput] = useState('');

  if(searchInput){
  onSearchChange(searchInput)
  }

  return (
    <div>
        <input className='border rounded-xl border-b-gray-400 px-3 py-2 mt-8 block w-full h-1/2 outline-0 focus:border-blue-400 ' placeholder='Search' value={searchInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}></input>
    </div>
  )
}

export default SearchNews