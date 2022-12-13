const { loadJavaScript, loadTypeScript } = require('./javascript');
const { loadImages } = require('./images');
const { loadSvg } = require('./svgs');
const { loadDevCss, loadProdCss, loadSass } = require('./css');
const { resolvers } = require('./resolvers')
const { setupPlugins } = require('./plugins');
const { loadFonts } = require('./fonts');
const { optimizeImages } = require('./optimization');

const modules = {
    loadJavaScript,
    loadTypeScript,
    loadImages,
    loadSvg,
    loadDevCss, 
    loadProdCss,
    loadSass,
    loadFonts,
    resolvers,
    setupPlugins,
    optimizeImages,
}

module.exports = { modules };