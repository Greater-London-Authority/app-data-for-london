import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export default async function FAQ() {
	const content = await getMarkdownContent('faq.md');
	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'FAQs' }, // No href means it's the current page
	];

	return (
		<div className='p-24'>
			<Breadcrumbs items={breadcrumbs} />
			<div className='block text-justify max-w-7xl mx-auto'>
				<MarkdownRenderer content={content} />
			</div>
		</div>
	);
}
