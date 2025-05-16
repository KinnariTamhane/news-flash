"use client";
import {useState} from 'react'
import Link from 'next/link';
// import DarkMode from './components.

function Header() {
const [searchInput,setSearchInput] = useState('');

  return (
   <>
    <div className='block md:grid md:grid-cols-3 mx-4 md:mx-0 mb-'>
        <Link href="/" className='px-5 py-3 mt-12 md:mt-0'>
            <p className='text-center md:text-left text-4xl md:text-6xl pt-2'>🌍 <span className='text-3xl md:text-4xl align-middle'>NewsFlash</span></p>
        </Link>
     <input className='border rounded-xl border-b-gray-400 px-3 py-2 mt-8 w-full h-1/2 outline-0 focus:border-blue-400 ' placeholder='Search' value={searchInput} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}></input>
    </div>
    <nav className='flex justify-around overflow-auto'>
        <ul className='flex justify-around w-full md:w-[60%] md:mx-10 mx-2 my-8 text-sm md:text-xl'>
            <li className='hover:font-bold cursor-pointer hover:text-blue-500 border-r-2 border-white px-2 md:border-0'>
                <Link href="#tech">Tech</Link>
            </li>
            <li className='hover:font-bold cursor-pointer hover:text-blue-400 border-r-2 border-white px-2 md:border-0'>
                <Link href="#business">Business</Link>
            </li>
            <li className='hover:font-bold cursor-pointer hover:text-blue-400 border-r-2 border-white px-2 md:border-0'>
                 <Link href="#sports">Sports</Link>
            </li>
            <li className='hover:font-bold cursor-pointer hover:text-blue-400 border-r-2 border-white px-2 md:border-0'>
                <Link href="#entertainment">Entertainment</Link> 
            </li>
            <li className='hover:font-bold cursor-pointer hover:text-blue-400 px-2'>
                 <Link href="#science">Science</Link> 
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Header