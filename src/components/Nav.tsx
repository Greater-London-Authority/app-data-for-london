import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Nav: React.FC = () => {
  return (
    <div className='w-full flex justify-center text-darkpink px-24'>
      <nav className='flex flex-wrap justify-between items-center px-4 py-[1.4rem] max-w-[1200px] w-full'>
        <div className='flex flex-wrap items-center'>
          <Link href='/'>
            <Image
              src='Data_For_London_Main_Logo.png'
              alt='Data for London Logo'
              width={2759}
              height={1144}
              style={{ width: '150px', height: 'auto' }}
              unoptimized
            />
          </Link>
        </div>
        <ul className='flex flex-col md:flex-row justify-between gap-9 list-none'>
          <li>
            <Link href='/' className='no-underline'>
              <span className='flex items-center font-semibold'>Home</span>
            </Link>
          </li>
          <li>
            <Link href='/search' className='no-underline'>
              <span className='flex items-center font-semibold'>Library</span>
            </Link>
          </li>
          <li>
            <Link href='/login' className='no-underline'>
              <span className='flex items-center font-semibold'>Log in</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
