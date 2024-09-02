import type { Metadata } from 'next';
import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Banner from '@/components/Banner';

export const metadata: Metadata = {
	title: 'Data for London',
	description: 'Data for London site',
};

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
					<Nav></Nav>
				</header>
				<main>{children}</main>
				<footer>
					<p>
						We use cookies to ensure we give you the best experience on our
						website. Find out more about cookies in our privacy policy [Link to
						privacy policy]. View cookie settings [Link to cookie settings].{' '}
					</p>
					<p>© Copyright 2024, Greater London Authority.</p>
				</footer>
			</body>
		</html>
	);
}
