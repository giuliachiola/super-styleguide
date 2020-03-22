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
    // git
    {
      title: 'git',
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
            mainTag: 'git',
          }
        )
      }
    },
    // vsc
    {
      title: 'vsc',
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
            mainTag: 'vsc',
          }
        )
      }
    },
    // vuejs
    {
      title: 'vuejs',
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
            mainTag: 'vuejs',
          }
        )
      }
    },
    // js
    {
      title: 'js',
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
            mainTag: 'js',
          }
        )
      }
    },
    // css
    {
      title: 'css',
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
            mainTag: 'css',
          }
        )
      }
    },
    // nodejs
    {
      title: 'nodejs',
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
            mainTag: 'nodejs',
          }
        )
      }
    },
    // design system
    {
      title: 'design system',
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
            mainTag: 'design-system',
          }
        )
      }
    },
    // static site generator
    {
      title: 'static site generator',
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
            mainTag: 'static-site-generator',
          }
        )
      }
    },
    // markdown
    {
      title: 'markdown',
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
            mainTag: 'markdown',
          }
        )
      }
    },
  ]
}
