import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess'; // Import svelte-preprocess

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // If you're using preprocessors like TypeScript or SCSS
    preprocess: preprocess(), // Use preprocess() here

    kit: {
        adapter: adapter(),
		paths: {
            base: process.env.NODE_ENV === 'production' ? '/mrmoxon.github.io' : '',
        }
    }
};

export default config;