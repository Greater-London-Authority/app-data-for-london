import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Nav: React.FC = () => {
	return (
		<div className='w-full flex justify-center text-darkpink px-24'>
			<nav className='flex flex-wrap justify-between items-center py-4 max-w-7xl w-full'>
				<div className='flex flex-wrap items-center'>
					<Link href='/'>
						<Image src='' alt='Data for London' width={70} height={70} />
					</Link>
				</div>
				<ul className='flex flex-col md:flex-row justify-between gap-9 list-none'>
					<li>
						<Link href='/'>
							<span className='flex items-center font-semibold'>
								Home
								<Image
									src=''
									alt='home icon'
									width={20}
									height={20}
									className='ml-2'
								/>
							</span>
						</Link>
					</li>
					<li>
						<Link href='/search'>
							<span className='flex items-center font-semibold'>
								Search
								<Image
									src=''
									alt='search icon'
									width={20}
									height={20}
									className='ml-2'
								/>
							</span>
						</Link>
					</li>
					<li>
						<Link href='/login'>
							<span className='flex items-center font-semibold'>
								Log in
								<Image
									src=''
									alt='log in icon'
									width={20}
									height={20}
									className='ml-2'
								/>
							</span>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
