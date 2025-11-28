import localFont from 'next/font/local'

export const gratoFont = localFont({
	src: [
		{
			path: './fonts/gratogrotesk-regular.otf',
			weight: '400',
			style: 'normal',
		},
		{ path: './fonts/gratogrotesk-bold.otf', weight: '700', style: 'normal' },
	],
	variable: '--font-gratofont',
})
