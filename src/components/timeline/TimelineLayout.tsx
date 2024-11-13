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
        <TimelineItem orientation={orientation} key={item.id}>
          <TimelineConnector
            orientation={orientation}
            isLast={index === items.length - 1}
          />
          <TimelineHeader orientation={orientation}>
            <TimelineTime orientation={orientation}>{item.date}</TimelineTime>
            <TimelineIcon orientation={orientation} />
            <TimelineTitle>{item.title}</TimelineTitle>
          </TimelineHeader>
          <TimelineContent orientation={orientation}>
            <TimelineDescription>{item.description}</TimelineDescription>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
