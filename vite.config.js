const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~Typed': path.resolve(__dirname, 'node_modules/typed.js'),
      '~AOS': path.resolve(__dirname, 'node_modules/aos')
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}