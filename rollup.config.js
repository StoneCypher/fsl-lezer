
import nodeResolve from '@rollup/plugin-node-resolve';





const esm = {

  input: 'build/typescript/fsl.js',

  output: {
    file   : 'dist/fsl.esm.js',
    format : 'es',
    name   : 'fsl'
  },

  plugins : [

    nodeResolve({
      mainFields     : ['module', 'main'],
      browser        : true,
      extensions     : [ '.js' ],
      preferBuiltins : false
    })

  ]

};





const cjs = {

  input: 'build/typescript/fsl.js',

  output: {
    file    : 'dist/fsl.cjs.js',
    format  : 'cjs',
    name    : 'fsl',
    exports : 'named'
  },

  plugins : [

    nodeResolve({
      mainFields     : ['module', 'main'],
      browser        : true,
      extensions     : [ '.js' ],
      preferBuiltins : false
    })

  ]

};





const iife = {

  input: 'build/typescript/fsl.js',

  output: {
    file   : 'dist/fsl.iife.js',
    format : 'iife',
    name   : 'fsl'
  },

  plugins : [

    nodeResolve({
      mainFields     : ['module', 'main'],
      browser        : true,
      extensions     : [ '.js' ],
      preferBuiltins : false
    })

  ]

};





export default [esm, cjs, iife];
