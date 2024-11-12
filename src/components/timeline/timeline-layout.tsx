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
} from '@/components/timeline/timeline';

export interface TimelineElement {
  id: number;
  title: string;
  date: string;
  description: string;
}

interface TimelineLayoutProps {
  items: TimelineElement[];
  orientation?: 'vertical' | 'horizontal';
}

interface TimelineLayoutProps {
  items: TimelineElement[]; // Replace any[] with the actual type of items.
}
export const TimelineLayout = ({
  items,
  orientation = 'vertical',
}: TimelineLayoutProps) => {
  return (
    <Timeline orientation={orientation}>
      {items.map((item) => (
        <TimelineItem orientation={orientation} key={item.id}>
          <TimelineConnector orientation={orientation} />
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
