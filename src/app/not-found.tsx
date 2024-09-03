import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export default async function NotFound() {
	const content = await getMarkdownContent('404.md');

	return (
		<div className='p-24'>
			<div className='block text-center max-w-7xl mx-auto'>
				<MarkdownRenderer content={content} />
			</div>
		</div>
	);
}
