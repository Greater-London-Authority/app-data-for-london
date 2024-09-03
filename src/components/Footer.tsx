import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
	return (
		<footer className=' flex justify-center bg-darkpink p-8 border-t border-ldn-grey'>
			<div className='flex-col max-w-7xl w-full'>
				<div className='flex flex-wrap justify-start gap-24'>
					<section className='mb-8 max-w-60'>
						<h2 className='text-xl font-semibold mb-2'>Find out more</h2>
						<p className='mb-4 font-semibold'>
							Keep up to date on the programme:
						</p>
						<ul className='list-none pl-0 space-y-2'>
							<li>
								<Link
									href='https://chiefdigitalofficer4london.medium.com/towards-a-new-data-for-london-library-d95a062f30d9'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:underline'
								>
									Blog
								</Link>
							</li>
							<li>
								<Link
									href='https://www.linkedin.com/company/city-intelligence-unit'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:underline'
								>
									LinkedIn
								</Link>
							</li>
							<li>
								<Link
									href='https://x.com/ldn_data'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:underline'
								>
									X: @LDN_data
								</Link>
							</li>
						</ul>
					</section>
					<section className='mb-8 max-w-60'>
						<h2 className='text-xl font-semibold mb-2'>Useful links</h2>
						<ul className='list-none pl-0 space-y-2'>
							<li>
								<Link href='/privacy-policy' className='hover:underline'>
									Privacy policy
								</Link>
							</li>
							<li>
								<Link
									href='/data-for-london-library'
									className='hover:underline'
								>
									Visit the Data for London Library
								</Link>
							</li>
							<li>
								<Link href='/terms-and-conditions' className='hover:underline'>
									Terms and conditions
								</Link>
							</li>
							<li>
								<Link href='/report-bug' className='hover:underline'>
									Report a bug or issue
								</Link>
							</li>
							<li>
								<Link href='/accessibility' className='hover:underline'>
									Accessibility
								</Link>
							</li>
							<li>
								<Link href='/user-research-pool' className='hover:underline'>
									Join our user research pool
								</Link>
							</li>
							<li>
								<Link href='/contact-us' className='hover:underline'>
									Contact us
								</Link>
							</li>
							<li>
								<Link
									href='https://www.london.gov.uk/programmes-strategies/business-and-economy/mayors-priorities-londons-economy-and-business/smart-london/sign-up-london-datastore-ezine'
									target='_blank'
									rel='noopener noreferrer'
									className='hover:underline'
								>
									Sign up for our ezine
								</Link>
							</li>
						</ul>
					</section>
				</div>
				<div className='flex-col '>
					<section>
						<p className='text-sm'>
							We use cookies to ensure we give you the best experience on our
							website. Find out more about cookies in our{' '}
							<Link href='/privacy-policy' className='hover:underline'>
								privacy policy
							</Link>
							. View{' '}
							<Link href='/cookie-settings' className='hover:underline'>
								cookie settings
							</Link>
							.
						</p>
					</section>
					<section>
						<p className='text-sm'>
							© Copyright 2024, Greater London Authority.
						</p>
					</section>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
