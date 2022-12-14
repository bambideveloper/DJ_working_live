const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@': 'src',
        '@assets': 'src/assets',
        '@components': 'src/components',
        '@hooks': 'src/hooks',
        '@layouts': 'src/layouts',
        '@pages': 'src/pages',
        '@routes': 'src/routes',
        '@services': 'src/services',
        '@store': 'src/store',
        '@styles': 'src/styles',
        '@themes': 'src/themes',
        '@utils': 'src/utils'
    })(config);

    return config;
}