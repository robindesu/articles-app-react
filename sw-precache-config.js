module.exports = {
    staticFileGlobs: [
        'build/static/css/**.css',
        'build/static/js/**.js'
    ],
    swFilePath: './build/service-worker.js',
    stripPrefix: 'build/',
    importScripts: (['./sw-custom.js']),
    handleFetch: false
}