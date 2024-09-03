import React from 'react';
import Link from 'next/link';

interface BreadcrumbsProps {
	items: {
		label: string;
		href?: string; // If href is provided, it will be a link; otherwise, it's the current page
	}[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
	return (
		<nav
			aria-label='breadcrumb'
			className='text-sm mb-4 font-bold text-darkpink'
		>
			<ol className='list-none p-0 inline-flex'>
				{items.map((item, index) => (
					<li key={index} className='flex items-center'>
						{item.href ? (
							<Link href={item.href} className='text-blue-600 hover:underline'>
								{item.label}
							</Link>
						) : (
							<span className='text-gray-500'>{item.label}</span>
						)}
						{index < items.length - 1 && (
							<span className='mx-2 text-gray-400'>/</span>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
};

export default Breadcrumbs;
