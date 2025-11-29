import type { Metadata } from 'next'
import './globals.css'
import { interFont } from './fonts'
import Header from './components/Header/Index'
import Footer from './components/Footer/Index'

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
			<body className={`${interFont.variable} font-sans antialiased`}>
				<div className='container'>
					<Header />
					<main>{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
