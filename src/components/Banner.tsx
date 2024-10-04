import React from 'react';
import Image from 'next/image';

const Banner: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center items-center gap-6 min-h-24 bg-ldn-grey py-6">
        <a href="https://www.london.gov.uk/">
          <Image
            className="m-3"
            src="/logo-mayoral.svg"
            alt="Mayor of London"
            width={207}
            height={16}
          ></Image>
        </a>
        <a href="https://www.london.gov.uk/">
          <Image
            className="m-3"
            src="/logo-assembly.svg"
            alt="London Assembly"
            width={194}
            height={16}
          ></Image>
        </a>
      </div>
    </div>
  );
};

export default Banner;
