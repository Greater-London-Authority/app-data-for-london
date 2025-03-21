import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export const metadata: Metadata = {
  title: 'Join our user research pool - Data for London',
  description:
    'View how to join our user research pool for the Data for London site',
};

export default async function UserResearchPool() {
  const content = await getMarkdownContent('user-research-pool.md');
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Join our user research pool' }, // No href means it's the current page
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbs} />
      <div className='block text-left max-w-[1200px] px-4 my-4 mx-auto'>
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
}
