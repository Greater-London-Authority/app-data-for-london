'use client';

import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineContentConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineDescription,
  TimelineContent,
  TimelineTime,
} from '@/components/timeline/Timeline';
import { TimelineElement } from '@/content/timelineData';

interface TimelineLayoutProps {
  items: TimelineElement[];
  orientation?: 'vertical' | 'horizontal';
}

export const TimelineLayout = ({
  items,
  orientation = 'vertical',
}: TimelineLayoutProps) => {
  return (
    <Timeline orientation={orientation}>
      {items.map((item, index) => (
        <TimelineItem
          key={item.id}
          orientation={orientation}
          isAbove={orientation === 'horizontal' && index % 2 === 0}
        >
          <TimelineConnector
            orientation={orientation}
            isLast={index === items.length - 1}
          />
          <TimelineHeader orientation={orientation}>
            <TimelineTime orientation={orientation}>{item.date}</TimelineTime>
            <TimelineIcon orientation={orientation} />
          </TimelineHeader>
          <TimelineContentConnector orientation={orientation} />
          {/* Apply content classes for content below the timeline for odd-indexed items in horizontal orientation */}
          {orientation === 'horizontal' && index % 2 !== 0 && (
            <div className='content-row-below'>
              <TimelineContent
                orientation={orientation}
                className='horizontal-content-below'
              >
                <TimelineDescription>{item.description} </TimelineDescription>
              </TimelineContent>
            </div>
          )}
          {/* Apply content classes for content above the timeline for even-indexed items in horizontal orientation */}
          {orientation === 'horizontal' && index % 2 === 0 && (
            <div className='content-row-above'>
              <TimelineContent
                orientation={orientation}
                className='horizontal-content-above'
              >
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
            </div>
          )}

          {/* For vertical orientation, render content normally */}
          {orientation === 'vertical' && (
            <TimelineContent orientation={orientation}>
              <TimelineDescription>{item.description}</TimelineDescription>
            </TimelineContent>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
};
