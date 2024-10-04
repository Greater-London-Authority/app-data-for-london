import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='text-white flex justify-center bg-ldn-dark p-4 mt-11 border-t border-ldn-grey'>
      <div className='flex flex-col max-w-7xl w-full'>
        <div className='flex flex-wrap justify-between'>
          <section className='mb-8 w-full lg:w-1/5'>
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
                  className='text-white hover:text-white no-underline hover:underline'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.linkedin.com/company/city-intelligence-unit'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white hover:text-white no-underline hover:underline'
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href='https://x.com/ldn_data'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white hover:text-white no-underline hover:underline'
                >
                  X
                </Link>
              </li>
            </ul>
          </section>
          <section className='mb-8 w-full lg:w-1/5'>
            <h2 className='text-xl font-semibold mb-2'>Useful links</h2>
            <ul className='flex-col basis-1/2 flex-wrap list-none pl-0 space-y-2'>
              <li>
                <Link
                  href='/contribute'
                  className='text-white hover:text-white no-underline hover:underline'
                >
                  How to contribute
                </Link>
              </li>
              <li>
                <Link
                  href='/data-for-london-library'
                  className='text-white hover:text-white no-underline hover:underline'
                >
                  Visit the Data for London Library
                </Link>
              </li>
              <li>
                <Link
                  href='/report-bug'
                  className='text-white hover:text-white no-underline hover:underline'
                >
                  Report a bug or issue
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
          </section>
          <section className='mb-8 w-full lg:w-1/5'>
            <h2 className='text-xl font-semibold mb-2'>Support</h2>
            <ul className='flex-col basis-1/2 flex-wrap list-none pl-0 space-y-2'>
              <li>
                <Link
                  href='/faq'
                  className='text-white hover:text-white no-underline hover:underline'
                >
                  FAQs
                </Link>
              </li>
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
                  href='/terms-and-conditions'
                  className='text-white hover:text-white no-underline hover:underline'
                >
                  Terms and conditions
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
                  href='/contact'
                  className='text-white hover:text-white no-underline hover:underline'
                >
                  Contact us
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
              <Link
                href='/privacy-policy'
                className='text-white hover:text-white hover:underline'
              >
                privacy policy
              </Link>
              . View{' '}
              <Link
                href='/cookie-settings'
                className='text-white hover:text-white hover:underline'
              >
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
