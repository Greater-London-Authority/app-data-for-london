'use client';

import React from 'react';
import { TimelineLayout } from '@/components/timeline/TimelineLayout';
import { useEffect, useState } from 'react';

interface TimelineElement {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface TimelineContainerProps {
  items: TimelineElement[];
  orientation?: 'vertical' | 'horizontal';
}

//

const TimelineContainer: React.FC<TimelineContainerProps> = ({
  items,
  orientation,
}) => {
  const [responsiveOrientation, setResponsiveOrientation] = useState<
    'vertical' | 'horizontal'
  >(window.innerWidth < 1024 ? 'vertical' : 'horizontal');

  useEffect(() => {
    if (orientation) return;
    const handleResize = () => {
      setResponsiveOrientation(
        window.innerWidth < 1024 ? 'vertical' : 'horizontal'
      );
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [orientation]);

  const finalOrientation = orientation || responsiveOrientation;

  return (
    <div className='w-fit max-w-[1200px] m-auto'>
      <TimelineLayout items={items} orientation={finalOrientation} />
    </div>
  );
};

export default TimelineContainer;
