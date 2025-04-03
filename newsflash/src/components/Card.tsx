import React from 'react'
import Image from 'next/image'
function Card() {
  return (
    <div className='xl:grid md:grid grid-cols-3 md:grid-cols-2 xl:mx-10'>
       <div className='mx-5 mb-8 border border-white px-5 rounded-xl py-3'>
        <Image alt="Apple’s AirPods Max with USB-C will soon support lossless audio" src="" height={200} width={200}/>
            <h2 className='text-2xl'>Apple’s AirPods Max with USB-C will soon support lossless audio</h2>
            <p className='mt-5 line-clamp-4 text-md'>Apple is bringing higher-fidelity audio to its AirPods Max headphones in April, the company announced today. When the $549 headphones switched to a USB-C connector last year, they lost support for wired audio playback — but it seems like Apple is about to rec…</p>
            <p className='mt-3 text-sm'>Posted At : 2025-03-24</p>
            <button className='text-md mt-4 rounded-3xl text-left cursor-pointer hover:text-blue-500'>Read More..</button>
       </div>
      
    </div>
  )
}

export default Card