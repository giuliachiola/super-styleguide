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
  label: 'CA',
  variants: ['default.ejs'],
  context: {
    uiContext: {
      containerModifiers: ['ui-container--medium-bg'],
      componentModifiers: ['ui-card'],
    },
    filterList,
    cards: cards.map(card => _.merge(
      {},
      card,
      {
        modifiers: ['highlight-left'],
        hasImg: false,
        table: {

        }
      }
    )),
    hero: {
      title: `Projects`,
      subtitle: `Side projects I built during the last years`,
      img: `https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80`,
    }
  }
}
