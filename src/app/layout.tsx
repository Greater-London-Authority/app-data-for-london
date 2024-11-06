import type { Metadata } from 'next';
import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Script from 'next/script';
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'Data for London',
  description: 'Data for London site',
};

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
          <Banner></Banner>
          <Nav></Nav>
        </header>
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
