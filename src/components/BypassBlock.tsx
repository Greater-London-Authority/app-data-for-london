import React from 'react';

const BypassBlock: React.FC = () => {
  return (
    <a
      href='#main'
      className='focus:not-sr-only sr-only absolute focus:bg-white text-lg focus:text-ldn-dark focus:underline decoration-darkpink'
    >
      Skip to main content
    </a>
  );
};

export default BypassBlock;
