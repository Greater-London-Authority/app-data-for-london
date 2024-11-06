import type { Metadata } from 'next';
import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Data for London',
  description: 'Data for London site',
};

// Below insert links to show in the navigation bar
const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: 'https://dfl-library.london.gov.uk/dataset', label: 'Library' },
  { href: 'https://dfl-library.london.gov.uk/user/login', label: 'Log in' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <header>
          <Banner></Banner>
          <Nav links={navigationLinks} />
        </header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
