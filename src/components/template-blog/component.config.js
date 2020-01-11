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

module.exports = {
  label: 'CA',
  variants: ['default.ejs'],
  context: {
    uiContext: {
      containerModifiers: ['ui-container--medium-bg'],
      componentModifiers: ['ui-card'],
    },
    cardsGrid: {
      cards: cards.map(card => _.merge(
        {},
        card,
        {
          modifiers: ['squared-image'],
        }
      ))
    },
    hero: {
      title: `My awesome blog 🚀`,
      subtitle: `This is where I write everything I think it'd be helpful to someone else<br>or - you know - the future me.`,
    }
  }
}
