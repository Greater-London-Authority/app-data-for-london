import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export default async function Contact() {
	const content = await getMarkdownContent('terms-and-conditions.md');
	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'Terms and conditions' }, // No href means it's the current page
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
