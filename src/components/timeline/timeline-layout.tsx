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
  items: TimelineElement[]; // Replace any[] with the actual type of items.
}
export const TimelineLayout = ({ items }: TimelineLayoutProps) => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader>
          <TimelineTime>{items[0].date}</TimelineTime>
          <TimelineIcon />
          <TimelineTitle>{items[0].title}</TimelineTitle>
        </TimelineHeader>
        <TimelineContent>
          <TimelineDescription>{items[0].description}</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader>
          <TimelineTime>{items[1].date}</TimelineTime>
          <TimelineIcon />
          <TimelineTitle>{items[1].title}</TimelineTitle>
        </TimelineHeader>
        <TimelineContent>
          <TimelineDescription>{items[1].description}</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineHeader>
          <TimelineTime>{items[2].date}</TimelineTime>
          <TimelineIcon />
          <TimelineTitle>{items[2].title}</TimelineTitle>
        </TimelineHeader>
        <TimelineContent>
          <TimelineDescription>{items[2].description}</TimelineDescription>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
