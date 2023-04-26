const config = {
	darkMode: 'class',
	content: [
	  './src/**/*.{html,js,svelte,ts}',
	  require('path').join(
		require.resolve('@skeletonlabs/skeleton'),
		'../**/*.{html,js,svelte,ts}'
	  ),
	],
	theme: {
	  extend: {
		textColor: {
		  'ice-blue': '#04AFEB',
		  'electric-yellow': '#f5d70e',
		},
		animation: {
		  marquee: 'marquee 25s linear infinite alternate',
		},
		keyframes: {
		  marquee: {
			'0%': { transform: 'translateX(0%)' },
			'100%': { transform: 'translateX(-100%)' },
		  },
		},
	  },
	},
	plugins: [
	  require('@tailwindcss/forms'),
	  ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')(),
	],
  };
  
  module.exports = config;