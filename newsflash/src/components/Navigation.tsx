import React from 'react'
import Link from 'next/link';

function Navigation() {
  return (
    <nav className='flex justify-around overflow-auto'>
        <ul className='flex justify-around w-full md:w-[60%] md:mx-10 mx-2 my-8 text-sm md:text-xl'>
            <li className='hover:font-bold cursor-pointer hover:text-blue-500 border-r-2 border-white px-2 md:border-0'>
                <Link href="#tech">Technology</Link>
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
  )
}

export default Navigation