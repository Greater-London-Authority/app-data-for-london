import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';
import Hero from '@/components/Hero';
import { TimelineLayout } from '@/components/timeline/timeline-layout';

export default async function Home() {
  const content = await getMarkdownContent('index.md');

  const timelineData = [
    {
      id: 1,
      title: 'First event',
      date: '2022-01-01',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio euismod lacinia at quis risus sed vulputate odio ut. Quam viverra orci sagittis eu volutpat odio facilisis mauris.',
    },
    {
      id: 2,
      title: 'Second event',
      date: '2022-02-01',
      description:
        'Aut eius excepturi ex recusandae eius est minima molestiae. Nam dolores iusto ad fugit reprehenderit hic dolorem quisquam et quia omnis non suscipit nihil sit libero distinctio. Ad dolorem tempora sit nostrum voluptatem qui tempora unde? Sit rerum magnam nam ipsam nesciunt aut rerum necessitatibus est quia esse non magni quae.',
    },
    {
      id: 3,
      title: 'Third event',
      date: '2022-03-01',
      description:
        'Sit culpa quas ex nulla animi qui deleniti minus rem placeat mollitia. Et enim doloremque et quia sequi ea dolores voluptatem ea rerum vitae. Aut itaque incidunt est aperiam vero sit explicabo fuga id optio quis et molestiae nulla ex quae quam. Ab eius dolores ab tempora dolorum eos beatae soluta At ullam placeat est incidunt cumque.',
    },
  ];

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
      <div className='w-fit m-auto'>
        <TimelineLayout items={timelineData} />
      </div>
    </div>
  );
}
