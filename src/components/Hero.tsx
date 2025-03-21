import React from 'react';

interface HeroProps {
  imageUrl: string;
  headerText: string;
  paragraph?: string;
  buttonHref?: string;
  buttonText?: string;
}

const Hero: React.FC<HeroProps> = ({
  imageUrl,
  headerText,
  paragraph,
  buttonHref = '',
  buttonText = '',
}) => {
  return (
    <div
      className='relative flex items-center justify-center w-full min-h-[500px] mb-12'
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='max-w-[1200px] p-3 w-full text-white flex flex-col'>
        <h1 className='text-6xl md:text-8xl'>{headerText}</h1>
        <div className='w-full flex justify-between items-start flex-wrap'>
          {paragraph && <p className='text-lg mb-6 md:w-1/2'>{paragraph}</p>}
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
