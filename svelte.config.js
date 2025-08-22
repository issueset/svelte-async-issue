// @ts-check

import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

let async = false;
if (process.env.VITE_PUBLIC_SVELTE_EXPERIMENTAL_ASYNC === "async") {
  async = true;
} else if (process.env.VITE_PUBLIC_SVELTE_EXPERIMENTAL_ASYNC === "sync") {
  async = false;
} else {
  throw new Error(
    "process.env.VITE_PUBLIC_SVELTE_EXPERIMENTAL_ASYNC must be either 'async' or 'sync'"
  );
}

/** @type {import("@sveltejs/vite-plugin-svelte").SvelteConfig} */
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  compilerOptions: {
    experimental: {
      async: async,
    },
  },
};
