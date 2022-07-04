const CracoAntDesignPlugin = require('craco-antd')
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#f48549', // customize as needed
          '@link-color': '#e6a07c', // customize as needed
          '@font-size-base': '18px' // customize as needed
        }
      }
    }
  ]
}
