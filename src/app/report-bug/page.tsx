import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export const metadata: Metadata = {
  title: 'How to report a bug - Data for London',
  description: 'View how to report a bug for the Data for London site',
};

export default async function ReportBug() {
  const content = await getMarkdownContent('report-bug.md');
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'How to report a bug' }, // No href means it's the current page
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
