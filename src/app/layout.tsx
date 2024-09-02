import type { Metadata } from 'next';
import '@/styles/globals.css';
import Nav from '@/components/Nav';
import Banner from '@/components/Banner';
import Footer from '@/components/Footer';

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
					<Footer></Footer>
				</footer>
			</body>
		</html>
	);
}
