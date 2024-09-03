import Breadcrumbs from '@/components/Breadcrumbs';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { getMarkdownContent } from '@/lib/MarkdownToHtml';

export default async function Contribute() {
	const content = await getMarkdownContent('how-to-contribute.md');
	const breadcrumbs = [
		{ label: 'Home', href: '/' },
		{ label: 'How to contribute' }, // No href means it's the current page
	];

	return (
		<div>
			<Breadcrumbs items={breadcrumbs} />
			<div className='py-24 block text-justify max-w-7xl mx-auto'>
				<MarkdownRenderer content={content} />
			</div>
		</div>
	);
}
