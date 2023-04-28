// eslint-disable-next-line no-undef
module.exports = {
	async redirects() {
		return [
			{
				source: '/home',
				destination: '/',
				permanent: true,

			},
		];
	},
	reactStrictMode: true,
	swcMinify: true,
};
