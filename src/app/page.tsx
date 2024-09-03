import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export default async function Home() {
	const content = await getMarkdownContent('index.md');

	return (
		<div className='py-24'>
			<div className='block text-justify max-w-7xl mx-auto'>
				<MarkdownRenderer content={content} />
			</div>
		</div>
	);
}
