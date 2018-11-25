const commandLineUsage = require('command-line-usage')

const sections = [
    {
        header: 'font-lookup',
        content: 'Look for installed fonts and show their info.'
    },
    {
        header: 'Options',
        optionList: [
            {
                name: 'family',
                typeLabel: '{underline font family}',
                description: 'The font family to search for, i.e. "Helvetica Neue".'
            },
            {
                name: 'psname',
                typeLabel: '{underline postscript name}',
                description: 'The PostScript name to search for, i.e. "Helvetica-Neue".'
            },
            {
                name: 'help',
                description: 'Print this usage guide.'
            }
        ]
    }
]
const usage = commandLineUsage(sections)
//console.log(usage)

module.exports = {
    'usage-guide' : usage
}