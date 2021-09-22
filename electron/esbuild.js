const esbuild = require('esbuild')

function showUsage () {
  console.log('USAGE')
  console.log('node esbuild.js dev')
  console.log('node esbuild.js prod')
  process.exit(0)
}

if (process.argv.length < 3) {
  showUsage()
}

if (![ 'dev', 'prod' ].includes(process.argv[2])) {
  showUsage()
}

// production mode, or not
const production = (process.argv[2] === 'prod')

// esbuild build options
// see: https://esbuild.github.io/api/#build-api
const options = {
  entryPoints: [
    'index.ts',
  ],
  external: [ 'electron' ],
  outdir: '.',
  bundle: true,
  platform: 'node',
  target: 'es6',
  minify: production,
  pure: [ 'console.log' ], // remove mes console.log avec esbuild ssi minifySyntax (ou minify)
  sourcemap: false,
  legalComments: 'none'
}

// esbuild dev + prod
esbuild.build(options).catch(() => {
  process.exit(1)
})
