import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export default async function Home() {
	const content = await getMarkdownContent('index.md');

	return (
		<main className='p-24'>
			<MarkdownRenderer content={content} />
		</main>
	);
}
