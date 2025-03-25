import React from 'react'

function Header() {
  return (
    <div className='block md:grid md:grid-cols-3 mx-4 md:mx-0'>
        <div className='px-5 py-3 mt-12 md:mt-0'>
            <p className='text-center md:text-left text-4xl md:text-6xl pt-2'>🌍 <span className='text-3xl md:text-4xl align-middle'>NewsFlash</span></p>
        </div>
        <input className='border rounded-xl border-b-gray-400 px-3 py-2 mt-8 w-full h-1/2 outline-0 focus:border-blue-400 ' type='text' value='' placeholder='Search'></input>
        <div>
            <button className='border rounded-2xl py-1 px-3 text-sm top-[2%] md:top-[8%] right-[1%] fixed cursor-pointer'>🔆 Dark Theme</button>
        </div>
    </div>
  )
}

export default Header