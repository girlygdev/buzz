import type { Metadata } from 'next';

import '@/styles/globals.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { geistMono, geistSans } from '@/styles/fonts';

export const metadata: Metadata = {
	title: 'Verve POS',
	description: 'Verve Cafe POS',
	icons: ['/logo.png'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
