import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export default async function Home() {
	const content = await getMarkdownContent('index.md');

	return (
		<main className='p-24 flex justify-center'>
			<div className='max-w-7xl'>
				<MarkdownRenderer content={content} />
			</div>
		</main>
	);
}
