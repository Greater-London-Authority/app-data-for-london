import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

interface NavLink {
  href: string;
  label: string;
}

interface NavProps {
  links: NavLink[];
}

const Nav: React.FC<NavProps> = ({ links }) => {
  return (
    <div className='w-full flex justify-center bg-library-header h-fit min-h-20 px-2 py-2 border-solid border-b-[1px] border-b-library-border'>
      <nav className='md:flex md:flex-row flex-wrap justify-between items-center px-3 py-2 max-w-[1200px] w-full'>
        <div className='flex flex-wrap items-center'>
          <Link href='/'>
            <Image
              src='dfl-logo.svg'
              alt='Data for London Logo'
              width={2759}
              height={1144}
              style={{ width: 'auto', height: '55.11px' }}
              unoptimized
            />
          </Link>
        </div>
        <ul className='flex flex-row items-center justify-between gap-8 list-none mt-3 md:m-0 md:mr-9'>
          {links.map((link, index) => (
            <li key={index} className='m-auto'>
              <Link
                href={link.href}
                className='no-underline hover:underline text-ldn-dark text-lg'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
