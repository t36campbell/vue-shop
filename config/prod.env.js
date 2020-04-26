const webpack = require('webpack');

module.exports = {
  NODE_ENV: '"production"',
    chainWebpack: config => {
        config
            .plugin('provide')
            .use(webpack.ProvidePlugin, [{
                $: 'jquery',
                jquery: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }]);
    },
};