import type { Metadata } from 'next';
import '@/styles/globals.css';
import BypassBlock from '@/components/BypassBlock';
import Nav from '@/components/Nav';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
  robots: 'noindex,nofollow',
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
  const GTM_ID = `GTM-NSHK6JGC`;
  return (
    <html lang='en'>
      <Script id='gtm' strategy='afterInteractive'>
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
      </Script>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;" />`,
          }}
        />
        <header>
          <BypassBlock />
          <Banner></Banner>
          <Nav links={navigationLinks} />
        </header>
        <main id='main'>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
