// Debug to run it in nodeJS
const moduleAlias = require('module-alias')
moduleAlias.addAlias('@content', process.cwd() + '/content')
// Config
// const path = require('path')
// const RenderDocs = require('@scripts/render-docs.js')
// const variant = new RenderDocs(path.dirname(__filename))
const _ = require('lodash')
// Components
const { cards } = require('../card/default-content.js')
const { filterList } = require('../filter/default-content.js')

module.exports = {
  label: 'TE',
  variants: ['default.ejs'],
  context: {
    uiContext: {
      containerModifiers: ['ui-container--medium-bg'],
      componentModifiers: ['ui-card'],
    },

  }
}
