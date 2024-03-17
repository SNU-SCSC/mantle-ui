const JSON5 = require('json5');
const tsConfig = JSON5.parse(require('fs').readFileSync('./tsconfig.json', 'utf8'));

module.exports ={
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          baseUrl: tsConfig.compilerOptions.baseUrl,
          paths: tsConfig.compilerOptions.paths,
        },
      },
    ],
    '^.+\\.css$': '<rootDir>/script/jest-transform-stub.js',
  }
}