import * as React from 'react';
import { cn } from '@/lib/utils';

const Timeline = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement> & {
    orientation?: 'vertical' | 'horizontal';
  }
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      'timeline',
      orientation === 'horizontal'
        ? 'horizontal-timeline'
        : 'vertical-timeline',
      className
    )}
    {...props}
  />
));
Timeline.displayName = 'Timeline';

const TimelineItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement> & {
    orientation?: 'vertical' | 'horizontal';
    isAbove?: boolean;
  }
>(
  (
    { className, orientation = 'vertical', isAbove = 'false', ...props },
    ref
  ) => (
    <li
      ref={ref}
      className={cn(
        'timeline-item relative',
        orientation === 'horizontal'
          ? isAbove
            ? 'horizontal-timeline-item-above'
            : 'horizontal-timeline-item-below'
          : 'vertical-timeline-item',
        className
      )}
      {...props}
    />
  )
);
TimelineItem.displayName = 'TimelineItem';

const TimelineTime = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & {
    orientation?: 'vertical' | 'horizontal';
  }
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      'absolute text-base font-semibold text-ldn-dark m-0',
      orientation === 'horizontal' ? 'horizontal-time' : 'vertical-time',
      className
    )}
    {...props}
  />
));
TimelineTime.displayName = 'TimelineTime';

const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: 'vertical' | 'horizontal';
    isLast: false | true;
  }
>(({ className, orientation = 'vertical', isLast = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative',
      orientation === 'horizontal'
        ? 'horizontal-connector'
        : 'vertical-connector',
      className
    )}
    {...props}
  >
    {/* Conditionally render the arrow if it's the last connector */}
    {isLast && (
      <div
        className={cn(
          'arrow',
          orientation === 'horizontal' ? 'arrow-horizontal' : 'arrow-vertical'
        )}
      />
    )}
  </div>
));
TimelineConnector.displayName = 'TimelineConnector';

const TimelineHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: 'vertical' | 'horizontal';
  }
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      orientation === 'horizontal' ? 'horizontal-header' : 'vertical-header',
      className
    )}
    {...props}
  />
));
TimelineHeader.displayName = 'TimelineHeader';

const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'font-semibold leading-none tracking-tight text-ldn-dark m-0',
      className
    )}
    {...props}
  >
    {children}
  </h3>
));
TimelineTitle.displayName = 'CardTitle';

const TimelineIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: 'vertical' | 'horizontal';
  }
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col size-3 bg-darkpink rounded-full',
      orientation === 'horizontal' ? 'horizontal-icon' : 'vertical-icon',
      className
    )}
    {...props}
  />
));
TimelineIcon.displayName = 'TimelineIcon';

const TimelineDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-base text-ldn-dark max-w-sm m-0', className)}
    {...props}
  />
));
TimelineDescription.displayName = 'TimelineDescription';

const TimelineContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: 'vertical' | 'horizontal';
  }
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col items-start py-4 px-6 border-darkpink border-2 rounded-[6px]',
      orientation === 'horizontal' ? 'horizontal-content' : 'vertical-content',
      className
    )}
    {...props}
  />
));
TimelineContent.displayName = 'TimelineContent';

const TimelineContentConnector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: 'vertical' | 'horizontal';
  }
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      orientation === 'horizontal'
        ? 'horizontal-content-connector'
        : 'vertical-content-connector',
      className
    )}
    {...props}
  ></div>
));
TimelineContentConnector.displayName = 'TimelineContentConnector';

export {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineContentConnector,
  TimelineHeader,
  TimelineTitle,
  TimelineIcon,
  TimelineDescription,
  TimelineContent,
  TimelineTime,
};
