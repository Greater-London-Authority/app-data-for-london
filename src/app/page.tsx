import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';
import Hero from '@/components/Hero';

export default async function Home() {
  const content = await getMarkdownContent('index.md');

  return (
    <div>
      <Hero
        imageUrl='hero_image.jpg'
        imageAlt='asd'
        headerText='Data for London'
        paragraph='Find out about the Data for London programme, established by the Mayor of London and Greater London Authority.'
        buttonHref='https://dfl-library.london.gov.uk'
        buttonText='Visit the Data for London Library'
      ></Hero>
      <div className='block text-left max-w-[1200px] px-4 my-4 mx-auto'>
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
}
