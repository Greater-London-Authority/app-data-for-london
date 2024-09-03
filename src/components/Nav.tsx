import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Nav: React.FC = () => {
	return (
		<div className='w-full flex justify-center text-darkpink'>
			<nav className='flex justify-between items-center py-4 w-3/4'>
				<div className='flex items-center'>
					<Link
						href='/'
						className='"d-inline-flex link-body-emphasis text-decoration-none"'
					>
						<Image src='' alt='Data for London' width={70} height={70} />
					</Link>
				</div>
				<ul className='flex justify-between w-1/3 list-none'>
					<li>
						<Link href='/'>
							<span className='flex items-center'>
								HOME
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
							<span className='flex items-center'>
								SEARCH
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
							<span className='flex items-center'>
								LOG IN
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
