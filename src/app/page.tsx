import { Metadata } from 'next';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';
import Hero from '@/components/Hero';
import TimelineContainer from '@/components/timeline/TimelineContainer';
import { timelineData } from '@/content/timelineData';

export const metadata: Metadata = {
  title: 'Data for London',
  description: 'See information about the Data for London',
};

export default async function Home() {
  const content = await getMarkdownContent('index.md');

  return (
    <div>
      <Hero
        imageUrl='hero_image.jpg'
        headerText='Data for London'
        paragraph='Find out about the Data for London programme, established by the Mayor of London and Greater London Authority.'
        buttonHref='https://dfl-library.london.gov.uk'
        buttonText='Visit the Data for London Library'
      ></Hero>
      <div className='block text-left max-w-[1200px] px-3 my-4 mx-auto'>
        <MarkdownRenderer content={content} />
      </div>
      <div className='max-w-[1200px] px-4 my-3 mx-auto'>
        <TimelineContainer items={timelineData} />
      </div>
    </div>
  );
}
