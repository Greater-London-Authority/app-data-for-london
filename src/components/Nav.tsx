import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Nav: React.FC = () => {
  return (
    <div className='w-full flex justify-center bg-library-header px-24 py-2 h-fit min-h-20 border-solid border-b-[1px] border-b-library-border'>
      <nav className='flex flex-wrap justify-between items-center px-4 py-2  max-w-[1200px] w-full'>
        <div className='flex flex-wrap items-center'>
          <Link href='/'>
            <Image
              src='Data_For_London_Main_Logo.png'
              alt='Data for London Logo'
              width={2759}
              height={1144}
              style={{ width: 'auto', height: '55.11px' }}
              unoptimized
            />
          </Link>
        </div>
        <ul className='flex flex-col md:flex-row itesm-center justify-between gap-8 list-none m-0 mr-8'>
          <li className='m-auto'>
            <Link
              href='/'
              className='no-underline hover:underline text-ldn-dark text-lg'
            >
              Home
            </Link>
          </li>
          <li className='m-auto'>
            <Link
              href='/search'
              className='no-underline hover:underline text-ldn-dark text-lg'
            >
              Library
            </Link>
          </li>
          <li className='m-auto'>
            <Link
              href='/login'
              className='no-underline hover:underline text-ldn-dark text-lg'
            >
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
