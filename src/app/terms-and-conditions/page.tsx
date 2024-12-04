import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export const metadata: Metadata = {
  title: 'Terms and conditions - Data for London',
  description: 'View terms and conditions for the Data for London site',
};

export default async function TermsAndConditions() {
  const content = await getMarkdownContent('terms-and-conditions.md');
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Terms and conditions' }, // No href means it's the current page
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
