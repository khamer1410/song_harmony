import type { Config } from 'tailwindcss';
import siraUI from '@sira-ui/tailwind';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				fill: '#284467',
				primary: '#0095E9',
				secondary: '#3B3F44',
				tertiary: '#40AA51',
				dark: '#884B2F'
			}
		}
	},
	plugins: [siraUI]
} satisfies Config;
