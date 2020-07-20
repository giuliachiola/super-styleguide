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

const tilContext = {
  uiContext: {
    containerModifiers: ['ui-container--medium-bg'],
    componentModifiers: ['ui-card'],
  },
  filterList,
  cards: cards.map(card => _.merge(
    {},
    card,
    {
      modifiers: ['highlight-top'],
      hasImg: false,
      number: 17,
    }
  )),
  hero: {
    title: `Today I learned`,
    subtitle: `Useful snippet I learned daily`,
    // img: `https://images.unsplash.com/photo-1553830591-42e4fd7035ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80`,
  }
}

module.exports = {
  label: 'TPL',
  variants: [
    {
      file: 'default.ejs',
      context: tilContext,
    },
    {
      file: 'dark-mode.ejs',
      context: tilContext,
    }
  ],
}
