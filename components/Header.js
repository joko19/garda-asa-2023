import Link from 'next/link';
import { useState } from 'react';

function Header() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className='flex items-center flex-wrap fixed md:px-12  bg-orange-500 p-3 w-screen z-20 '>
      <Link href='/'>
        <a className='inline-flex items-center p-2 mr-4 '>
          <span className='text-xl text-white font-bold uppercase tracking-wide'>
            Garda Asa
          </span>
        </a>
      </Link>
      <button
        className=' inline-flex p-3  rounded lg:hidden text-white ml-auto hover:text-white outline-none'
        onClick={handleClick}
      >
        <img className='h-8' src="https://img.icons8.com/fluency/48/000000/menu-2.png" />
      </button>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full z-20 lg:items-center items-start  flex flex-col lg:h-auto'>
          <Link href='/'>
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:border-b hover:text-white '>
              Home
            </a>
          </Link>
          <Link href='/awardee'>
            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:border-b hover:text-white'>
              Awardee
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Header