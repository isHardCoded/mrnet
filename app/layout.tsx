import type { Metadata } from 'next'
import './globals.css'
import { gratoFont } from './fonts'
import Header from './components/Header/Index'

export const metadata: Metadata = {
	title: 'MRNET',
	description: 'MRNET',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${gratoFont.variable} antialiased`}>
				<div className='container'>
					<Header />
					<main>{children}</main>
				</div>
			</body>
		</html>
	)
}
