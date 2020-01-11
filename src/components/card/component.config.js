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

const card = cards[0]

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
        card: _.merge(
          {},
          card,
          {
            hasImg: false,
          }
        )
      }
    },
    // Squared image
    {
      title: 'Squared image',
      file: 'default.ejs',
      context: {
        uiContext: {
          containerModifiers: ['ui-container--medium-bg'],
          componentModifiers: ['ui-card'],
        },
        card: _.merge(
          {},
          card,
          {
            modifiers: ['squared-image'],
          }
        )
      }
    },
    // Horizontal
    {
      title: 'Horizontal',
      file: 'default.ejs',
      context: {
        uiContext: {
          containerModifiers: ['ui-container--medium-bg'],
          componentModifiers: [],
        },
        card: _.merge(
          {},
          card,
          {
            modifiers: ['short-image'],
          }
        )
      }
    },
  ]
}
