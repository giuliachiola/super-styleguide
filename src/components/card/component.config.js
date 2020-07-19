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
const tags =
['codepen',
  'css',
  'design-system',
  'git',
  'gitlab',
  'github',
  'js',
  'svg',
  'mac-os',
  'markdown',
  'nodejs',
  'reindeer',
  'static-site-generator',
  'svg',
  'template-engine',
  'terminal',
  'twitter',
  'vsc',
  'vuejs',
]
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
    // Squared image
    {
      title: 'Squared image - Horizontal',
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
            modifiers: ['squared-image', 'horizontal'],
          }
        )
      }
    },
    // Highlight left
    {
      title: 'Highlight left',
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
            modifiers: ['highlight-left'],
          }
        )
      }
    },
    // Highlight top
    {
      title: 'Highlight top',
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
            modifiers: ['highlight-top'],
            number: 2,
          }
        )
      }
    },
    /* --------
      Tags
    -------- */
    {
      title: 'Card tags',
      file: 'cards-tags.ejs',
      context: {
        uiContext: {
          containerModifiers: ['ui-container--medium-bg'],
          componentModifiers: [],
        },
        cardsArr: tags.map((tag) => {
          return (
            _.merge(
              {},
              card,
              {
                title: tag,
                modifiers: ['squared-image'],
                mainTag: tag,
              },
            )
          )
        })
      }
    },
  ]
}
