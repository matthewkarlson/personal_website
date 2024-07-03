import adapter from "@sveltejs/adapter-node";
import  vitePreprocess  from  'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
        adapter: adapter({
          pages: 'build',
          assets: 'build',
          fallback: null
        }),
        // Other SvelteKit configurations
      }

};

export default config;