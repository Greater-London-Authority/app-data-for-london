import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export default async function NotFound() {
  const content = await getMarkdownContent('404.md');

  return (
    <div className='block text-center max-w-[1200px] px-4 my-4 mx-auto'>
      <MarkdownRenderer content={content} />
    </div>
  );
}
