import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export const metadata: Metadata = {
  title: 'Accessibility - Data for London',
  description: 'View accesibility information for the Data for London site',
};

export default async function Accessibility() {
  const content = await getMarkdownContent('accessibility.md');
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Accessibility' }, // No href means it's the current page
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
