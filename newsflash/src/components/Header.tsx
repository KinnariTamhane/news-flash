import React from 'react'

function Header() {
  return (
   <>
    <div className='block md:grid md:grid-cols-3 mx-4 md:mx-0 mb-20'>
        <div className='px-5 py-3 mt-12 md:mt-0'>
            <p className='text-center md:text-left text-4xl md:text-6xl pt-2'>🌍 <span className='text-3xl md:text-4xl align-middle'>NewsFlash</span></p>
        </div>
        {/* <input className='border rounded-xl border-b-gray-400 px-3 py-2 mt-8 w-full h-1/2 outline-0 focus:border-blue-400 ' placeholder='Search' value=''></input> */}
        <div>
            <button className='border rounded-2xl py-1 px-3 text-sm top-[2%] sm:top-[2%]  lg:top-[8%] right-[1%] fixed cursor-pointer'>🔆 Dark Theme</button>
        </div>
    </div>
    {/* <nav className='flex justify-around'>
            <ul className='flex justify-around md:w-[60%] md:mx-10 mx-2 my-8'>
                <li className='hover:font-bold cursor-pointer hover:text-blue-500 border-r-2 border-white px-2 md:border-0'>
                    Tech
                </li>
                <li className='hover:font-bold cursor-pointer hover:text-blue-400 border-r-2 border-white px-2 md:border-0'>
                    Business
                </li>
                <li className='hover:font-bold cursor-pointer hover:text-blue-400 border-r-2 border-white px-2 md:border-0'>
                    Sports
                </li>
                <li className='hover:font-bold cursor-pointer hover:text-blue-400 border-r-2 border-white px-2 md:border-0'>
                    Entertainment
                </li>
                <li className='hover:font-bold cursor-pointer hover:text-blue-400 px-2'>
                    Science
                </li>
            </ul>
        </nav> */}
   </>
  )
}

export default Header