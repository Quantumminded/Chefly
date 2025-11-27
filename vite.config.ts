import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// Export an async config so we can dynamically import optional plugins.
// This avoids build/dev failures if the optional devDependencies are not installed.
export default defineConfig(async () => {
  const plugins: any[] = [svelte()];

  // Try to load image optimization plugin if present
  try {
    const imageToolsMod = await import('vite-imagetools');
    const imageTools = imageToolsMod.default || imageToolsMod;
    plugins.push(imageTools());
  } catch (e) {
    // plugin not installed — skip
  }

  // Try to load compression and visualizer plugins if present. If they're not
  // installed, we skip them silently to avoid breaking dev/start.
  try {
    const compressionMod = await import('vite-plugin-compression');
    const compression = compressionMod.default || compressionMod;
    // produce Brotli and Gzip versions for static hosting
    plugins.push(compression({ algorithm: 'brotliCompress', ext: '.br', threshold: 1024 }));
    plugins.push(compression({ algorithm: 'gzip', ext: '.gz', threshold: 1024 }));
  } catch (e) {
    // plugin not installed — skip
  }

  try {
    const visualizerMod = await import('rollup-plugin-visualizer');
    const visualizer = visualizerMod.visualizer || visualizerMod.default || visualizerMod;
    plugins.push({ ...visualizer({ filename: 'dist/stats.html', gzipSize: true }), apply: 'build' });
  } catch (e) {
    // plugin not installed — skip
  }

  return {
    plugins,
    build: {
      // Use esbuild minifier (faster, built-in, no extra deps)
      minify: true,
      // CSS code splitting: extract CSS into separate files for better caching
      cssCodeSplit: true,
      // Disable source maps in production to save bundle size
      sourcemap: false,
      // Optimize chunk size and improve caching with manual chunks
      rollupOptions: {
        output: {
          manualChunks: {
            // Separate Svelte internals into its own chunk for better caching
            svelte: ['svelte'],
          },
        },
      },
    },
  };
});


