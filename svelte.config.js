import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: '404.html'
    }),
    alias: {
      $data: "./src/data"
    },
    appDir: 'app'
  },

  preprocess: preprocess({
    postcss: true,
  }),
}

export default config;