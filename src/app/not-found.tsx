import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export default async function NotFound() {
	const content = await getMarkdownContent('404.md');

	return (
		<div className='py-24 block text-center max-w-7xl mx-auto'>
			<MarkdownRenderer content={content} />
		</div>
	);
}
