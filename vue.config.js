module.exports = {
    configureWebpack: {
      plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
      ]
    }
  }