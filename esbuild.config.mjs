import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: [
    './src/**/*.ts',
    './src/views/**/*.edge'
  ],
  bundle: false,
  minify: false,
  outdir: './dist/',
  platform: 'node',
  target: 'node22.0.0',
  format: 'esm',
  packages: 'external',
  loader: {
    '.edge': 'copy'    
  },
  tsconfig: './tsconfig.json',
})