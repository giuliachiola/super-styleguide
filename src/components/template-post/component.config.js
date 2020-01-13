// Debug to run it in nodeJS
const moduleAlias = require('module-alias')
moduleAlias.addAlias('@content', process.cwd() + '/content')
// Config
// const path = require('path')
// const RenderDocs = require('@scripts/render-docs.js')
// const variant = new RenderDocs(path.dirname(__filename))
// Components
const { randItem, getRandom } = require('@content/dynamic-content.js')

module.exports = {
  label: 'CA',
  variants: [
    // Default
    {
      title: 'Default',
      file: 'default.ejs',
      context: {
        uiContext: {
          containerModifiers: ['ui-container--medium-bg'],
          componentModifiers: ['ui-card'],
        },
        hero: {
          title: false,
          img: `https://images.unsplash.com/photo-1474377207190-a7d8b3334068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80`,
        },
        articleSection: {
          date: randItem('dates'),
          tags: Array.from({length: getRandom(4, 1)}, () => randItem('tags').label),
        }
      }
    },
  ]
}
