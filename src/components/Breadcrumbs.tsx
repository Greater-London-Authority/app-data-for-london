import React from 'react';
import Link from 'next/link';

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string; // If href is provided, it will be a link; otherwise, it's the current page
  }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav
      aria-label='breadcrumb'
      className='max-w-7xl px-[1rem] mx-auto my-[1.4rem] font-bold'
    >
      <ol className='list-none p-0 inline-flex'>
        {items.map((item, index) => (
          <li key={index} className='flex items-center'>
            {item.href ? (
              <Link href={item.href} className=' text-darkpink hover:underline'>
                {item.label}
              </Link>
            ) : (
              <span className=' text-ldn-dark'>{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span className='mx-2  text-darkpink'>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
