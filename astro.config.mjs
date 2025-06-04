// @ts-check
import { defineConfig } from 'astro/config';
import { readingtime } from './src/pages/api/readingtime.js';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [readingtime],
  },
  integrations: [svelte({
    extensions: ['.svelte']
  })],
});