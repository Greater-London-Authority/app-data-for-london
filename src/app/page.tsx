import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export default async function Home() {
	const content = await getMarkdownContent('index.md');
	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Section', href: '/section' },
		{ label: 'Subsection', href: '/section/subsection' },
		{ label: 'Current Page' }, // No href means it's the current page
	];

	return (
		<main className='p-24'>
			<Breadcrumbs items={breadcrumbs} />
			<MarkdownRenderer content={content} />
		</main>
	);
}
