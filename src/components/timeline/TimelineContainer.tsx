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

// This component's purpose is to provide responsive functionality to the TimelineLayout and Timeline components. By deafult it ensures a horizontal orientation prop is passed to the timeline on large screens (>1024px) and a vertical orientation is enforced on medium and small screens. This behaviour can be overriden by passing the optional prop 'orientation' to this component.

const TimelineContainer: React.FC<TimelineContainerProps> = ({
  items,
  orientation,
}) => {
  // Default to 'vertical' to match server-rendered output
  const [responsiveOrientation, setResponsiveOrientation] = useState<
    'vertical' | 'horizontal'
  >('vertical');

  useEffect(() => {
    if (!orientation) {
      // Update orientation based on window size in the browser
      const handleResize = () => {
        setResponsiveOrientation(
          window.innerWidth < 1024 ? 'vertical' : 'horizontal'
        );
      };

      handleResize(); // Set initial value
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [orientation]);

  const finalOrientation = orientation || responsiveOrientation;

  return (
    <div className='max-w-[1200px] m-auto md:px-14 py-4'>
      <TimelineLayout items={items} orientation={finalOrientation} />
    </div>
  );
};

export default TimelineContainer;
