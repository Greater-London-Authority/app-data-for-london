import React from 'react';

const Footer: React.FC = () => {
	return (
		<footer className='bg-darkpink py-8 mt-16 border-t border-ldn-grey'>
			<div className='flex-col mx-auto px-4'>
				<div className='flex justify-between mx-auto px-4'>
					<section className='mb-8'>
						<h2 className='text-xl font-semibold mb-2'>Find out more</h2>
						<p className='mb-4'>Keep up to date on the programme:</p>
						<ul className='list-none pl-0 space-y-2'>
							<li>
								<a
									href='https://chiefdigitalofficer4london.medium.com/towards-a-new-data-for-london-library-d95a062f30d9'
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-500 hover:underline'
								>
									Blog: Theo’s Medium Blog
								</a>
							</li>
							<li>
								<a
									href='https://www.linkedin.com/company/city-intelligence-unit'
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-500 hover:underline'
								>
									LinkedIn: City Intelligence Unit
								</a>
							</li>
							<li>
								<a
									href='https://x.com/ldn_data'
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-500 hover:underline'
								>
									X: @LDN_data
								</a>
							</li>
						</ul>
					</section>
					<section className='mb-8'>
						<h2 className='text-xl font-semibold mb-2'>Useful links</h2>
						<ul className='list-none pl-0 space-y-2'>
							<li>
								<a
									href='/privacy-policy'
									className='text-blue-500 hover:underline'
								>
									Privacy policy
								</a>
							</li>
							<li>
								<a
									href='/data-for-london-library'
									className='text-blue-500 hover:underline'
								>
									Visit the Data for London Library
								</a>
							</li>
							<li>
								<a
									href='/terms-and-conditions'
									className='text-blue-500 hover:underline'
								>
									Terms and conditions
								</a>
							</li>
							<li>
								<a href='/report-bug' className='text-blue-500 hover:underline'>
									Report a bug or issue
								</a>
							</li>
							<li>
								<a
									href='/accessibility'
									className='text-blue-500 hover:underline'
								>
									Accessibility
								</a>
							</li>
							<li>
								<a
									href='/user-research-pool'
									className='text-blue-500 hover:underline'
								>
									Join our user research pool
								</a>
							</li>
							<li>
								<a href='/contact-us' className='text-blue-500 hover:underline'>
									Contact us
								</a>
							</li>
							<li>
								<a
									href='https://www.london.gov.uk/programmes-strategies/business-and-economy/mayors-priorities-londons-economy-and-business/smart-london/sign-up-london-datastore-ezine'
									target='_blank'
									rel='noopener noreferrer'
									className='text-blue-500 hover:underline'
								>
									Sign up for our ezine
								</a>
							</li>
						</ul>
					</section>
				</div>
				<section className='mb-8'>
					<p className='text-sm'>
						We use cookies to ensure we give you the best experience on our
						website. Find out more about cookies in our{' '}
						<a href='/privacy-policy' className='text-blue-500 hover:underline'>
							privacy policy
						</a>
						. View{' '}
						<a
							href='/cookie-settings'
							className='text-blue-500 hover:underline'
						>
							cookie settings
						</a>
						.
					</p>
				</section>
				<section>
					<p className='text-sm text-gray-600'>
						Badge Copyright with solid fill Copyright 2024, Greater London
						Authority.
					</p>
				</section>
			</div>
		</footer>
	);
};

export default Footer;
