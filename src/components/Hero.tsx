import React from 'react';
import Image from 'next/image';

interface HeroProps {
  imageUrl: string;
  imageAlt?: string;
  headerText: string;
  paragraph?: string;
  buttonHref?: string;
  buttonText?: string;
}

const Hero: React.FC<HeroProps> = ({
  imageUrl,
  imageAlt = 'background image',
  headerText,
  paragraph,
  buttonHref = '',
  buttonText = '',
}) => {
  return (
    <div className='relative flex items-center justify-center w-full min-h-[500px] mb-12'>
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        style={{ objectFit: 'cover' }}
        className='absolute inset-0 -z-10'
      />
      <div className='max-w-[1200px] p-4 w-full text-white flex flex-col'>
        <h1 className='text-[120px]'>{headerText}</h1>
        <div className='w-full flex justify-between items-start flex-wrap'>
          {paragraph && <p className='text-xl mb-6 md:w-1/2'>{paragraph}</p>}
          {buttonHref && (
            <a href={buttonHref} className='btn'>
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
