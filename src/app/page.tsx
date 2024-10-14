import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export default async function Home() {
  const content = await getMarkdownContent('index.md');

  return (
    <div>
      <div className='block text-left max-w-3xl px-4 my-4 mx-auto'>
        <MarkdownRenderer content={content} />
      </div>
    </div>
  );
}
