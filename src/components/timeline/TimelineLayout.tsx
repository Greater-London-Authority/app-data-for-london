'use client';

import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineTitle,
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
          {orientation === 'horizontal' && index % 2 === 0 && (
            <TimelineContent
              orientation={orientation}
              className='horizontal-content-above'
            >
              <TimelineDescription>{item.description}</TimelineDescription>
            </TimelineContent>
          )}
          <TimelineConnector
            orientation={orientation}
            isLast={index === items.length - 1}
          />
          <TimelineHeader orientation={orientation}>
            <TimelineTime orientation={orientation}>{item.date}</TimelineTime>
            <TimelineIcon orientation={orientation} />
          </TimelineHeader>
          {/* Render content below the timeline for odd-indexed items in horizontal orientation */}
          {orientation === 'horizontal' && index % 2 !== 0 && (
            <TimelineContent
              orientation={orientation}
              className='horizontal-content-below'
            >
              <TimelineDescription>{item.description} </TimelineDescription>
            </TimelineContent>
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
