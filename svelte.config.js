import adapter from "@sveltejs/adapter-node";
import { sveltePreprocess } from "svelte-preprocess";
import { mdsvex } from "mdsvex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkToc from "remark-toc";
import remarkGemoji from "remark-gemoji";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md", ".svx"],
  
  preprocess: [
    sveltePreprocess(),
    mdsvex({
      extensions: [".md", ".svx"],
      rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
      remarkPlugins: [remarkToc, remarkGemoji]
    })
  ],

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