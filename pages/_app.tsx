import Head from 'next/head';

import '@styles/tailwind.css';

interface IMyAppProps {
	Component: React.ComponentType;
	pageProps: any;
}

export default function MyApp({ Component, pageProps }: IMyAppProps) {
	return (
		<>
			<Head>
				<title>Next Boilerplate</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<main>
				<Component {...pageProps}></Component>
			</main>
		</>
	);
}
