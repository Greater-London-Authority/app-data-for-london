import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Nav: React.FC = () => {
	return (
		<div className='w-full flex justify-center text-darkpink'>
			<nav className='flex justify-between items-center py-4 w-3/4'>
				<div className='flex items-center'>
					<a
						href='/'
						className='"d-inline-flex link-body-emphasis text-decoration-none"'
					>
						<Image
							src='/logo.png'
							alt='Data for London'
							width={70}
							height={70}
						/>
					</a>
				</div>
				<ul className='flex justify-between w-1/3'>
					<li>
						<Link href='/'>
							<span className='flex items-center'>
								HOME
								<Image
									src='/home-icon.png'
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
									src='/search-icon.png'
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
									src='/login-icon.png'
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
