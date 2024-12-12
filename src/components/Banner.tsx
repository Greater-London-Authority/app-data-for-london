import React from 'react';
import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div className='w-full bg-ldn-grey py-6'>
      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-12 '>
        <a href='https://www.london.gov.uk/'>
          <Image
            src='logo-mayoral.svg'
            alt='Mayor of London'
            width={207}
            height={16}
          ></Image>
        </a>
        <a href='https://www.london.gov.uk/'>
          <Image
            src='logo-assembly.svg'
            alt='London Assembly'
            width={194}
            height={16}
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default Banner;
