
import Link from 'next/link';

function Header() {
  return (
   <>
    <div className='block md:grid md:grid-cols-3 mx-4 md:mx-0 mb-'>
        <Link href="/" className='px-5 py-3 mt-12 md:mt-0 w-full'>
            <p className='text-center md:text-left text-4xl md:text-6xl pt-2'>🌍 <span className='text-3xl md:text-4xl align-middle'>NewsFlash</span></p>
        </Link>
    </div>
    </>
  )
}

export default Header