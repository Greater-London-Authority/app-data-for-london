import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export default async function Contact() {
	const content = await getMarkdownContent('contact.md');
	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Contact' }, // No href means it's the current page
	];

	return (
		<main className='p-24'>
			<Breadcrumbs items={breadcrumbs} />
			<MarkdownRenderer content={content} />
		</main>
	);
}
