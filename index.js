const fontManager = require('font-manager')
const usageGuide = require('./src/usage-guide')
// const clipboardy = require('clipboardy');
console.log(usageGuide)
var fonts = fontManager.findFontsSync({ 'family': 'Volvo Novum' })

//console.log(fonts)

let cssFontFaces = fonts.map(font => {
    return `@font-face {
        font-family: '${[font.family, font.style].join(' ')}';
        src: local('${font.postscriptName}'),
             url('../fonts/Volvo-Novum-Medium.woff') format('woff'),
             url('../fonts/Volvo-Novum-Medium.woff2') format('woff2');
        font-weight: ${font.weight};
        font-style: normal;
}`
})

//console.log(cssFontFaces[0])

//clipboardy.writeSync(cssFontFaces[0]);

// clipboardy.readSync();