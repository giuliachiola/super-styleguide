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
  label: 'PH',
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
        photoGrid: {

        }
      }
    },
  ]
}