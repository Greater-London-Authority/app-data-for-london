import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const Footer: React.FC = () => {
  return (
    <footer className='site-footer text-white bg-footer-dark mt-11 border-t border-ldn-grey px-4 pt-12'>
      <div className='container mx-auto max-w-[1200px]'>
        <div className='row'>
          <div className='col-md-8 my-4'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 w-full mx-auto'>
              {/* Connect with Us */}
              <section className='col-span-1'>
                <h2 className='text-2xl font-semibold mb-4'>Connect with us</h2>
                <ul className='flex gap-8 flex-wrap text-lg list-none pl-0'>
                  <li>
                    <SocialIcon
                      url='https://chiefdigitalofficer4london.medium.com/towards-a-new-data-for-london-library-d95a062f30d9'
                      label='Blog'
                      target='_blank'
                    />
                  </li>
                  <li>
                    <SocialIcon
                      url='https://www.linkedin.com/company/city-intelligence-unit'
                      label='linkedin'
                      target='_blank'
                    />
                  </li>
                  <li>
                    <SocialIcon
                      url='https://x.com/ldn_data'
                      label='X'
                      target='_blank'
                    />
                  </li>
                </ul>
              </section>
              {/* Useful Links */}
              <section className='col-span-1 lg:col-span-2'>
                <h2 className='text-2xl font-semibold mb-4'>Useful links</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
                  <ul className='text-lg list-none space-y-4'>
                    <li>
                      <Link
                        href='/privacy-policy'
                        className='text-white hover:text-white no-underline hover:underline'
                      >
                        Privacy policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/accessibility'
                        className='text-white hover:text-white no-underline hover:underline'
                      >
                        Accessibility
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/terms-and-conditions'
                        className='text-white hover:text-white no-underline hover:underline'
                      >
                        Terms and conditions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/contact'
                        className='text-white hover:text-white no-underline hover:underline'
                      >
                        Contact us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/report-bug'
                        className='text-white hover:text-white no-underline hover:underline'
                      >
                        How to report a bug
                      </Link>
                    </li>
                  </ul>
                  <ul className='text-lg list-none space-y-4'>
                    <li>
                      <Link
                        href='https://dfl-library.london.gov.uk/'
                        className='text-white hover:text-white no-underline hover:underline'
                      >
                        Visit the Data for London Library
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/faq'
                        className='text-white hover:text-white no-underline hover:underline'
                      >
                        Frequently asked questions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/user-research-pool'
                        className='text-white hover:text-white no-underline hover:underline'
                      >
                        Join our user research pool
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='https://www.london.gov.uk/programmes-strategies/business-and-economy/mayors-priorities-londons-economy-and-business/smart-london/sign-up-london-datastore-ezine'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-white hover:text-white no-underline hover:underline'
                      >
                        Sign up for our ezine
                      </Link>
                    </li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
